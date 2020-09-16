/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/cacl.js":
/*!********************************!*\
  !*** ./src/js/modules/cacl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
    // Калькулятор калорий.
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    if (localStorage.getItem('sex')) { //Если в локальном хранилище есть ключ sex
        sex = localStorage.getItem('sex'); //то в переменную sex записываем значение ключа sex из локального хранилища.
    } else { //Иначе устанавливаем значения по умолчанию.
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) { //Если в локальном хранилище есть ключ ratio
        ratio = localStorage.getItem('ratio'); //то в переменную ratio записываем значение ключа ratio из локального хранилища.
    } else { //Иначе устанавливаем значения по умолчанию.
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    //Функция подсчёта по формуле вычисления каллорий
    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) { //Если не заполнено поля каким-нибудь значением
            result.textContent = '____'; // То выводим сообщение.
            return; //Это необходимо, чтобы прервать функцию.
        }
        if (sex === 'female') { //Если пол женский, то считаем по формуле.
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio); //BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет). И результат умножаем на коэффициент активности ratio.
        } else { //Иначе (мужской).
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio); //BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет). И результат умножаем на коэффициент активности ratio.
        }
    }
    calcTotal();

    //Устанавливаем классы активности, в зависимаости от сохранённых значений в localStorage.
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector); //Элементы с которыми будем работать.

        elements.forEach(elem => { //Перебираем элементы.
            elem.classList.remove(activeClass); //Чистим класс актвивности. 
            if (elem.getAttribute('id') === localStorage.getItem('sex')) { //Если кнопка с id совпадает с значением из localStorage (с ключом sex).
                elem.classList.add(activeClass); //Устанавливаем класс активности на той кнопке, которая нажата.
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) { //Если кнопка с атрибутом data-ratio совпадает с значением из localStorage (с ключом ratio).
                elem.classList.add(activeClass); //Устанавливаем класс активности на той кнопке, которая нажата.
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    //Получаем данные с элементов (статический контент).
    function getStaticInformation(selector, activeClass) { //функция будет применяться на нескольких элементах, потому требуется parentSelector. Так же требуется класс активности activeClass для окрашивания кнопок, которые были нажаты.
        const elements = document.querySelectorAll(selector); // Получаем все div внутри выбранного элемента.

        elements.forEach(elem => { //Перебираем все элементы. Используем делегирование событий.
            elem.addEventListener('click', (e) => { //Отслеживаем клики по родительскому элементу.
                if (e.target.getAttribute('data-ratio')) { //Если атрибут data-ratio присутсвует у объекта события. Это нужно, так как не у всех кнопок есть атрибут data-ratio.
                    ratio = +e.target.getAttribute('data-ratio'); //устанавливаем значение ratio в значение, которое взяли у e.target, то есть в значение дата атрибута data-ratio.
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); //Устанавливаем в параметр ratio со тем значением, которое вёл пользователь для поля с атрибутом data-ratio.
                } else {
                    sex = e.target.getAttribute('id'); //Если у элемента нет атрибута data-ratio, то этот впеременную "пол" записываем значение id элемента в который щёлкнули.
                    localStorage.setItem('sex', e.target.getAttribute('id')); //Устанавливаем в параметр sex с тем значением, которое вёл пользователь для поля с id.
                }
    
                elements.forEach(elem => { //перебираем все элементы.
                    elem.classList.remove(activeClass); // убираем класс активности.
                });
    
                e.target.classList.add(activeClass); //Добавляем класс активности.
    
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    //Получаем данные с элементов (динамический контент, который вводит пользователь). 
    function getDynamicInformation(selector) { 
        const input = document.querySelector(selector); //Получаем данные с поля, которые заполнил пользователь.

        input.addEventListener('input', () => { //отслеживаем, когда пользователь вводит данные.
            if (input.value.match(/\D/g)) { //Если в поле введено что-то кроме чисел.
                input.style.border = "1px solid red"; //Подсвечиваем поле красным цветом.
            } else {
                input.style.border = 'none'; //Если введено число, то не подсвечиваем поле.
            }
            switch(input.getAttribute('id')) { //Проверяем есть ли у элемента атрибут id.
                case "height":
                    height = +input.value; //Записываем значение value, которое ввёл пользователь.
                    break; //Останавиваем кейс.
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
    //------------------------- Классы стандарт ES6. Карточки на сайте. ----------------------//
    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; //массив
            this.parent = document.querySelector(parentSelector); //получаем один элемент. 
            this.transfer = 72; //курс валют.
            this.changeToRUB(); //Конвертация валюты.
        }
        //Создаём дополнитеьный метод, который будет заниматься конвертацией валют.
        changeToRUB () {
            this.price = this.price * this.transfer;
        }
        // Ещё один метод для формирования вёрстки. В данном случае render классическое название.
        render (){
            const element = document.createElement('div'); //создаём элемент в JS <div></div>
            if (this.classes.length === 0) {
                this.element = 'menu__item';//перезаписываем массив.
                element.classList.add(this.element); //ставим дефолтный класс
            } else {
            //Обрабатываем массив ...classes, проходимся по каждому элементу, вытаскиваем название класса и подсоединяем его к div.
            this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = // обращаемся к элементу <div></div>. Через innerHTML динамически создаём структуру, указывая меняющиеся элементы.
            `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
                </div>
            `;
            //Нужно указать, куда мы будем помещать все эти карточки. Каждый раз, когда будет вызываться MenuCard это родитель может быть абсолютно разным. Для этого создаём в MenuCard дополнительный аргумент parentSelector, то есть передаём именно селектор parentSelector. Соответственно нужно получить элемент со страницы, куда мы будем помещать этот элемент.
            this.parent.append(element); //Помещаем новый элемент внутрь элемента. Метод ParentNode.append добавляет набор объектов Node или DOMString в конец (после последнего потомка) ParentNode. DOMString объекты добавляются как Text.
        }
    }
    
    new MenuCard(
        "img/tabs/vegy.jpg", //Рекуомндуется/чаще всего используются двойные кавычки.
        "vegy",
        'Меню "Фитнес"', //Если двойные кавычки есть в тексте, тогда используем одинарные кавычки.
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9, //долларов. Число трансформируется через метод changeToRUB ().
        '.menu .container',
        'menu__item',
        'big'
    ).render();
    // Создаём ещё карточки. Пока что копируем. Но нужно уходить от копипаста и оптимизмровать код.
    new MenuCard(
        "img/tabs/elite.jpg", //Рекуомндуется/чаще всего используются двойные кавычки.
        "elite",
        'Меню “Премиум”', //Если двойные кавычки есть в тексте, тогда используем одинарные кавычки.
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14, //долларов. Число трансформируется через метод changeToRUB ().
        '.menu .container',
        'menu__item',
        'big'
    ).render();
    new MenuCard(
        "img/tabs/post.jpg", //Рекуомндуется/чаще всего используются двойные кавычки.
        "post",
        'Меню "Постное"', //Если двойные кавычки есть в тексте, тогда используем одинарные кавычки.
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21, //долларов. Число трансформируется через метод changeToRUB ().
        '.menu .container',
        //'menu__item',
        //'big'
    ).render();
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



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

            Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('https://proper-food.dementev-aleksandr.ru/db.json', json)
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
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId); //Функция описана выше. Открывает модальное окно modal.classList.add('show'); modal.classList.remove('hide');

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
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
        }, 4000);
    }

    //Обращаемся к локальной БД.
    fetch('https://proper-food.dementev-aleksandr.ru/db.json')
        .then(data => data.json()) //Берём объект из сервера и превращаем его в js объект.
        .then(res => console.log(res)); //выведем результат в консоль.
    //Результат. Получены данные для получения карточек меню. Меню - массив, который содержит отдельные объекты. Получаем массив данных. Если бы обращались на прямую к файлу fetch('db.json'), то получали бы объект, так как там объекты
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; //Возвращаем прокрутку сайта.
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //Убираем прокрутку сайта.
    console.log(modalTimerId);
    if(modalTimerId) { // Если modalTimmerId существует, то только тогда он будет запускаться.
        clearInterval(modalTimerId); //Если пользователь сам вызвал модальное окно, то оно не будет открываться повторно через заданный промежуток времени.
    }
    
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //------------------------------ Работа с модальным окном -------------------------//
    // В HTML для модального окна прописывает атрибут data-modal. Пример, <button data-modal class="btn btn_dark">Связаться с нами</button>.
    // Для закрытия модального окна прописываем дата атрибут data-close. Например, <div data-close class="modal__close">&times;</div>.
    //Создаём две функции. 1 - отвечает за открытие модального окна, 2 - за закрытие.
    const modalTridder = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);

    modalTridder.forEach(btn => {
        //При нажатии на кнопку button Связаться с нами, открываем модальное окно.
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId)); //обарачиваем openModal() в стрелочную функцию () =>, чтобы она сразу не открывалась на странице.
    });

    //Закрываем моддальное окно по нажатию не только на крестик, но и на подложку.
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') { //Свойство target интерфейса Event является ссылкой на объект, который был инициатором события или e.target это крестик модального окна, если он присутсвует, то мы будем закрывать модальное окно.
            closeModal(modalSelector);
        }
    });

    //Закрываем модальное окно по нажатию Esc на клавиатуре.
    document.addEventListener('keydown', (e) => { 
        if (e.code === "Escape" && modal.classList.contains('show')) { //Закрываем модальное окно по нажатию Esc на клавиатуре только тогда, когда модальное окно открыто.
            closeModal(modalSelector);
        }
    });

    //Вызываем модальное окно когда страница долистана до конца.
    //Чтобы определить, что пользователь долистал до конца делаем математическую формулу - берём свойство, которое отвечает за прокрутку сверху, затем берём свойство, которое отображает высоту пользовательского окна (видимой части) и будем её сравнивать со scrollHeight,
    //то есть с полной прокруткой и с полным контентом, который есть и если два этих выражения будут совпадать, то значит, что пользователь долистал до конца.
    function showModuleByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //если пользователь долистал до конца
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModuleByScroll); // Удаляем обработчик события. Когда пользователь долистывает до конца страницы модальное окно открывается только один раз. 
        }
    }
    window.addEventListener('scroll', showModuleByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({conteiner, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    let offset = 0; //Определяет текущий отступ слайда.
    let slideIndex = 1; //Определяет текущее положение слайда. Изначально №1.

    const slides = document.querySelectorAll(conteiner), //Родительский элемент каждого отдельного слайда.
        slider = document.querySelector(slide), //Родительский элемен всего слайдера, включая кнопки навигации.
        prev = document.querySelector(prevArrow), //Стрелка влево.
        next = document.querySelector(nextArrow), //Стрелка вправо.
        total = document.querySelector(totalCounter), //Номер слайда "Всего" 04/#total.
        current = document.querySelector(currentCounter), //Номер текущего слайда #current/04.
        slidesWrapper = document.querySelector(wrapper), // Обёртка для слайдов (для тега с классом .offer__slider-inner). Родительский элемент всех слайдов.
        width = window.getComputedStyle(slidesWrapper).width, //Метод Window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать. Получаем ширину width окошка .offer__slider-wrapper, через которое отображаются слайды.
        slidesField = document.querySelector(field); // Обёртка для слайдов (для тега с классом .offer__slide)

    //Определяем общее количество слайдов.
    if (slides.length < 10) { //Если количество элементов .offer__slide меньше 10.
        total.textContent = `0${slides.length}`; //Возвращаем количество слайдов с добавлением 0 и записываем в тег с #total. Cвойство length объекта, который является экземпляром типа Array , устанавливает или возвращает число элементов этого массива. 
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // Возвращаем количество слайдов, не подставляя 0 вначале и записываем в тег с #total.
        current.textContent =  slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%'; //Устанавливаем ширину блока .offer__slider-inner в 100%*4слайда = 400%. 
    slidesField.style.display = 'flex'; //Устанавливаем все слайды в одну строку.
    slidesField.style.transition = '0.5s all'; //Задержка в 0.5s.

    slidesWrapper.style.overflow = 'hidden'; //Ограничиваем показ внутри .offer__slider-wrapper.

    slides.forEach(slide => { //перебираем все .offer__slide (Родительский элемент каждого отдельного слайда).
        slide.style.width = width; //для каждого .offer__slide устанавиваем ширину в window.getComputedStyle(slidesWrapper).width.
    });

    slider.style.position = 'relative'; //Устанавливаем для .offer__slider position = 'relative'.

    //Создаём большую обёртку для всех слайдов и стилизуем её.
    const indicators = document.createElement('ol'), //Блок с точками для слайдов.
          dots = []; //Истинный массив, в котором можем использовать push.
    indicators.classList.add('carousel-indicators'); //Класс для блока с точками для слайдов.
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; // Добавляем стили для класса carousel-indicators
    slider.append(indicators); //Помещаем .carousel-indicators внутрь .offer__slider.

    for (let i = 0; i < slides.length; i++) { //Цикл закончится тогда, когда закончаться сллайды.
        const dot = document.createElement('li'); //Создаём точки (li).
        dot.setAttribute('data-slide-to', i + 1); //Индикатор соответвия, например первая точка ведёт к первому слайду. .setAttribute() - Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента. Каждой токе устанавливаем атрибут data-slide-to, и устанавливаем нумеруацию, начиная с 1.
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) { //Если итерация первая, то 
            dot.style.opacity = 1; //Обращаемся к li и добавляем ему стиль opacity = 1.
        }
        indicators.append(dot); //Добавляем li в ol
        dots.push(dot); //Помещаем li в массив dots. В итоге получаем массив с точками.
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => { //Нажимаем на кнопку "Вперёд".
        if (offset == (deleteNotDigits(width) * (slides.length - 1))) { //+width.replace(/\D/g, '')- все не числа, которые находятся внутри строки удаляем, полученное число умножаем на 4слайда (slides.length - 1).
            offset = 0; //Возвращаемся в начало.
        } else {
            offset += deleteNotDigits(width); //Добавляем смещение +650px. Записываем значение в offset. 
        }

        slidesField.style.transform = `translateX(-${offset}px)`; // Обращаемся к .offer__slider-inner. Трансформируем элемент по оси x. Используем знак "-" для сдвига в минус. 

        if (slideIndex == slides.length) { //Если текущий слайд равен количеству слайдов на странице всего, то
            slideIndex = 1; //Установить текущий слайд в 1.
        } else {
            slideIndex++; //Иначе добавляем к текущему слайду 1.
        }

        if (slides.length < 10) { //Если количество слайдов меньше 10
            current.textContent =  `0${slideIndex}`; //Установить текущий слайд в 0+номер текущего слайда в тегах html.
        } else {
            current.textContent =  slideIndex; // Иначе указываем просто текущий слайд в тегах html.
        }

        dots.forEach(dot => dot.style.opacity = ".5"); //Перебираем массив dots. Каждой точке устанавливаем стили в opacity = ".5".
        dots[slideIndex-1].style.opacity = 1; //Устанавливаем для dots номер текущего слайда - 1 в opacity = 1.
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1); //Устанавливаем в 1950px.
        } else {
            offset -= deleteNotDigits(width); // offset = offset - +width.slice(0, width.length - 2).
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) { //Если текущий слайд  равен 1, то
            slideIndex = slides.length; //Устанавливаем текущий слайд в количество слайдов "Всего".
        } else {
            slideIndex--; //Иначе уменьшаем текущий номер слайда на 1.
        }

        if (slides.length < 10) { //Если количество слайдов меньше 10, то
            current.textContent =  `0${slideIndex}`; //Указываем в тегах 0+текущйи слайд html.
        } else {
            current.textContent =  slideIndex; //Иначе указываем в тегах номер текущего слайда html.
        }

        dots.forEach(dot => dot.style.opacity = ".5"); //Перебираем массив dots. Каждой точке устанавливаем стили в opacity = ".5".
        dots[slideIndex-1].style.opacity = 1; //Устанавливаем для dots номер текущего слайда - 1 в opacity = 1.
    });

    dots.forEach(dot => { //Для массива dots, в котором содержатся li.
        dot.addEventListener('click', (e) => { //На каждую точку навешиваем обработчик события клика.
            const slideTo = e.target.getAttribute('data-slide-to'); //Используем объект события. Получаем атрибут data-slide-to.

            slideIndex = slideTo; //Номер слайда устанавливаем в data-slide-to, то есть кликнули на data-slide-to=4, текущий слайд установился в 1.
            offset = deleteNotDigits(width) * (slideTo - 1); //Берём общую ширину слайда * на номер li (data-slide-to).

            slidesField.style.transform = `translateX(-${offset}px)`; //Устанавливаем смещение для слайдера.

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5"); //Перебираем массив dots. Каждой точке устанавливаем стили в opacity = ".5".
            dots[slideIndex-1].style.opacity = 1; //Устанавливаем для dots номер текущего слайда - 1 в opacity = 1.
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //--------------------- Переключение контента по нажатию на вкладку --------------//
    let tabs = document.querySelectorAll(tabsSelector), //Получаем все вкладки.
        tabsContent = document.querySelectorAll(tabsContentSelector), //Получаем весь контентент для вкладок.
        tabsParent = document.querySelector(tabsParentSelector); //Получаем родитеьский элемент вкладок.
    
    function hideTypeContent() { //Создаём функуию, которая скрывает контент вкладки.
        tabsContent.forEach(item => { // перебираем псевдомасив с .tabcontent
            item.classList.add('hide'); //добавляем класс hide, который скрывает контент.
            item.classList.remove('show', 'fade'); //добавляем класс show, который показывает контент,убираем анимацию.
        });
        
        tabs.forEach(item => { //Убираем класс активности. Перебираем псевдомасив с .tabheader__item
            item.classList.remove(activeClass); //удаляем ...._active найденный в .tabheader__item.
        });
    }

    function showTypeContent(i = 0) { //Создаём функцуию, которая показывает контент вкладки.
        // По умолчанию выводится первый элемент.
        tabsContent[i].classList.add('show', 'fade'); //добавляем класс hide, который скрывает контент + анимация.
        tabsContent[i].classList.remove('hide'); //добавляем класс show, который показывает контент.
        tabs[i].classList.add(activeClass); //добавляем ...._active найденный в .tabheader__item.
    }

    hideTypeContent();
    showTypeContent(); //по умолчанию показываем контент первой вкладки.

    // Когда кликнули в пункт меню определяем его № в списке всех табов и по этому № вызываем функцию showTypeContent(),
    // то есть показываем контент и делается это перебором. Перебераем все табы, и сравниваем,
    // если элемент, который находится в псевдомассиве .tabheader__item совпадает с тем элементом,
    // который кликнул пользователь, тогда мы берём его номер и показываем на странице.
    tabsParent.addEventListener('click', (event) => { //Нажимаем на .tabheader
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) { //кликнули точно на вкладку.
            tabs.forEach((item, i) => { //перебираем массив с вкладками .tabheader__item.
                if (target == item) { // если .tabheader__item совпадаем с элементом в .forEach, то есть item.
                    hideTypeContent(); //то скрываем весь контент.
                    showTypeContent(i); //показываем тот порядковый элемент i в который кликнули.
                }
            });
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
    //------------------------------------- Таймер на сайте -------------------------------//
    // Timer
    // Делаем функцию, которая определяет разницу между деадлайном и текущим временем.
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу в милисекундах между конечной датой и текущей датой.
              //Превращаем количество милисекунд в формат Дни/Часы/Минуты/Секунды.
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              //Подсчитать количество дней, которые будут отображаться в таймере. Делим количество милисекунд на количество милисекунд, которые находятся в одном дне.
              // Количество милисекунд умножаем на 60, получаем милисекунд в одной минуте, дальше снова на 60, получаем милисекунд в часе, умножаем на 24, получаем количество милисекунд в сутках.
              // Делим оставшиеся милисекунды до deadline на количество милисекунд в сутках, полуаем количество суток.
              // Math.floor() - округление до целого числа.
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              // (1000 * 60 * 60) - получаем количество милисекунд в часе, t / (1000 * 60 * 60) - получаем оставшееся количество часов, % 24 - делим количество часов на 24 и получаем остаток, таким образом мы получаем число, которое не хватает до полных суток.
              //Например, при делении t / (1000 * 60 * 60) получилось 50 часов. 50 делим на 24, получаем два дня (48), и в остатке два часа.
              minutes = Math.floor((t / 1000 / 60) % 60), //Минуты
              seconds = Math.floor((t / 1000) % 60); //Секунды

              //Чтобы вывести переменные наружу, используем return
              return { //Возвращаем объект и возвращаем из функции
                'totalMs': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
              };
    }
    // Когда число в таймере однозначное, подставляем вмереди нолик.
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`; //модифицируем, подставляем спереди нолик.
        } else {
            return num; //не модифицируем число.
        }
    }

    // Устанавливаем таймер на страницу.
    function setClock(selector, endtime) {
        //Помещаем элементы со страницы
        const timer = document.querySelector(selector), //получаем корневой ээлемент таймера .timer
              days = timer.querySelector('#days'), // поучаем #days внутри .timer
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
        updateClock(); //Указываем здесь, чтобы убрать мигание таймера при обновлении страницы. Нужно, когда const timeInterval = setInterval(updateClock, 1000); указана выше самой функции обновления.
        //Обновляем таймер каждую секунду.
        function updateClock() {
            const t = getTimeRemaining(endtime); //Расчёт времени, который остался на текущую секунду. Это дедлай, который передаётся в setClock. Получаем объект с набором интересующих нас свойств.
            //Помещаем расчётные величины на страницу.
            days.innerHTML = getZero(t.days); //берём количество дней, котрое нужно отобразить на странице. getZero() - модифицирует число.
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            //Когда функция запустится, она расчитает нужно время и на основании этих расчётов она бедут записывать на страницу все эти результаты.
            //Запускаем функцию каждую секунду.
            const timeInterval = setInterval(updateClock, 1000); //Запуск функции через определённый промежуток времени.
            //Останавливаем таймер
            if (t.totalMs <= 0) { //если разница между текущим временем и деадлайном меньше или равно 0,
                clearInterval(timeInterval); //то перестаём обновлять таймер.
            }
        }
        updateClock();
    }
    //вызываем все функции
    setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cacl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cacl */ "./src/js/modules/cacl.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");











window.addEventListener('DOMContentLoaded', () => {

    //Вызываем модальное окно через промежуток времени.
    const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])('.modal', modalTimerId), 30000);

    Object(_modules_cacl__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', modalTimerId);
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form', modalTimerId);
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active');
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2020-12-31');
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({ //реструктуризация.
        conteiner: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slider',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});





/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
//пишем функцию postData, которая обрабатывает запрос к серверу, fetch'ит.
//Получаем ответ от сервера, например, что запостили успешно. После этого трансформирует ответ в JSON-формат.
const postData = async (url, data) => { // postData - отвечает за постинг данных на сервер. async - внутри функции будет асинхронный код, для async необходимо использовать парный оператор await, await ставим перед теми операциями, которые нужно дождаться. async и await всегда используются вместе.
    let res = await fetch(url, { // fetch - запрос. Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно. Подобная функциональность ранее достигалась с помощью XMLHttpRequest.
    // await - сначала ждёт пока запрос будет отправлен на сервер и только когда получили ответ от сервера записываются данные в переменную res.
        //Задаём настройки - метод и body (которое отправляем).
        method: 'POST',
        headers: { //Заголовки, какой контент мы отправляем.
            'Content-Type': 'application/json'
        },
        body: data //данные формы.
    }); 
    //Обрабатываем JSON-формат.
    return await res.json(); //Обозначение объектов JavaScript (JSON - JavaScript Object Notation) - стандартный текстовый формат для представления структурированных данных на основе синтаксиса объекта JavaScript. Он обычно используется для передачи данных в веб-приложениях (например, отправка некоторых данных с сервера клиенту,таким образом чтобы это могло отображаться на веб-странице или наоборот).
    // await - дожидаемся окончания работы промисса json() и только после этого он его возвращает из функции.
};

const getResource = async (url) => { //Получаем данные с сервера.
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json(); 
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map