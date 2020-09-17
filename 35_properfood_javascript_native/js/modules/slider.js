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

export default slider;