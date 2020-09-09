import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    //---------------------- Скрипт отправки данных на сервер. -------------------------//
    const form = document.querySelectorAll(formSelector);    //Получаем все формы по тегу form
    //Пишем функцию, которая отвечает за постинг данных.
    const message = { // Сообщения по итогам обращения к серверу.
        loading: 'img/form/spinner.svg', //Исползуем спиннер.
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время!',
        failure: 'Что-то пошло не так! Позвоните нам для оформления заказа!'
    };

    //Берём все формы и под каждую из них подвязываем bindPostData().
    form.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) { // bindPostData - привязка постинга, то есть привязать какой-то постинг данных.
        form.addEventListener('submit', (e) => { //Отслеживаем отправку данных. Нажатие кнопки.
            e.preventDefault();
            //Динамически создаём новый блок для сообщения, который добавляется к форме.
            let statusMessage = document.createElement('img'); 
            statusMessage.src = message.loading; //спиннер 'img/form/spinner.svg' вместо текста div
            statusMessage.style.cssText = //В img записали стили. Правильнее помещать в CSS.
            ` 
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //'afterend' - Куда вставляем (после формы), statusMessage - что вставляем.

            //Отправляем данные на сервер.
            const formData = new FormData(form); //собираем данные из document.querySelector('form');. Создаём объект, в котором будут введённые данные.
            
            //Трансформируем formData в JSON формат.
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // .entries() - получаем данные с формы в формате массива. .fromEntries() - Превращаем массив в объект. Затем объект превращаем в JSON-формат.

            postData('https://proper-food.dementev-aleksandr.ru/db.json', json)
            .then(data => {
                console.log(data); //При положительном результате выводим объект с данными в консоль.
                console.log(message.success);
                showThanksModal(message.success); //Запускаем функцию с сообщением, что всё ОК. Показывается модальное окно и через 4 чекунды оно закрывается, вместе с тексом и возвращением изначального контента, который там был.
                statusMessage.remove();}) //Удаляем спиннер.
            .catch(() => {
                console.log(message.failure);
                showThanksModal(message.failure);}) //При отрицательном запросе к БД выдаём сообщение об ошибке.
            .finally(() => { //При любом исходе.
                form.reset();}); //Очищаем форму.
        });
    }

    //---------------------- Улучшаем форму отправки данных на сервер -------------------------//
    function showThanksModal(message) { //message - соообщение, которое будет отправляться пользователю.
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide'); //Скрываем .modal__dialog добавлением класса .hide.
        openModal('.modal', modalTimerId); //Функция описана выше. Открывает модальное окно modal.classList.add('show'); modal.classList.remove('hide');

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog'); //Для div добавляем класс modal__dialog.
        thanksModal.innerHTML = //формируем вёрстку.
        `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal); //получаем модальное окно и аппендим туда наш блок.
        //Если пользователь захочет снова открыть модальное окно, тогда всё должно возвращаться на свои места. Новый блок исчезал, а старый возвращался на место.
        setTimeout(() => {
            thanksModal.remove(); //через 4 секунды удаляем div с классом modal__dialog.
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    //Обращаемся к локальной БД.
    fetch('https://proper-food.dementev-aleksandr.ru/db.json')
        .then(data => data.json()) //Берём объект из сервера и превращаем его в js объект.
        .then(res => console.log(res)); //выведем результат в консоль.
    //Результат. Получены данные для получения карточек меню. Меню - массив, который содержит отдельные объекты. Получаем массив данных. Если бы обращались на прямую к файлу fetch('db.json'), то получали бы объект, так как там объекты
}

export default forms;