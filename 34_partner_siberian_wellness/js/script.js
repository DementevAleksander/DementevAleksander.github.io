$(document).ready(function(){
    $('.caruosel__inner').slick({
        //dots: true,
        speed: 1500,
        //adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        //fade: true,
        //cssEase: 'linear'
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.conteiner').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

        function toggleSlide(item) {
            $(item).each(function(i){
                $(this).on('click', function(e){
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__content_description').eq(i).toggleClass('catalog-item__content_description_active');
                })
            });
        };

        toggleSlide ('.catalog-item__link');
        toggleSlide ('.catalog-item__back');

        // Модальные окна
        // $('[data-modal=consultation]') - находим элемент на странице
        // on('click', function()); - когда происходит клик на элемент выполняется функция
        // $('.overlay') - находим элемент .overlay (затемненние)
        // $('#consultation') - находим id="consultation" (модальное окно)
        //.fadeIn() - отображаем выбранный элемент
        $('[data-modal=consultation]').on('click', function(){
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function(){
            $('.overlay, #consultation, #thanks').fadeOut('slow');
        });

        // Валидация формы. Работает только по уникальному идентификатору. ПО классу берёт только первое значение
//        function validateForms (form) {
//            $(form).validate({
//                rules: {
//                    name: "required",
//                    phone: {
//                        required: true,
//                        minlength: 11
//                      },
//                    email: {
//                        required: true,
//                        email: true
//                    }
//                },
//                messages: {
//                    name: "Пожалуйста, введите своё имя",
//                    phone: {
//                        required: "Пожалуйста, введите свой номер телефона",
//                        minlength: jQuery.validator.format("Введите не менее {0} символов!")
//                      },
//                    email: {
//                      required: "Пожалуйста, введите свой e-mail",
//                      email: "Формат e-mail адреса некорректный"
//                    }
//                  }
//            });
//        }
//
//        validateForms('#feedback');
//        validateForms('#consultation form');


        // Маска ввода номера телефона
        //$('input[name=phone]').mask("+7 (999) 999-99-99");

        //Отправка писем

//        $('form').submit(function(e){
//          $('form') // - Обращаемся ко всем формам на сайте, когда прошла валидация формы, отправляется форма (submit), после отправки выполняем действие function(e - аргумент).
//            e.preventDefault(); // - позволяет отменить стандартное поведение браузера, нужно чтобы страница не перезагружалась.
//            $.ajax({ // .ajax() - отправляет данные с сайта.
//                type: "POST", // type: "POST" - передаём данные на сервер.
//                url: "../mailer/smart.php", // url: "mailer/smart.php" - куда отправляется запрос.
//                data: $(this).serialize()   //data - данные, которые отправялем на сервер. data: $(this) - работаем с тем, с чем работает, то есть если отправили данные во второй форме, то и работаем с этими данными. .serialize() - преобразование для сервера.
//            }).done(function(){ //.done - после выполнения, выполняем ещё одну функцию.
//                $(this).find("input").val(""); //.find("input") - находим теги imput и очищаем .val("").
//            
//            
//                $('form').trigger('reset'); // - все формы на сайте должны обновиться/очиститься.
//            });
//            return false;
//        });

        $('form').submit (function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize() 
            }).done(function(){ 
                $(this).find("input").val("");
                $('#consultation').fadeOut();
               $('.overlay, #thanks').fadeIn('slow');
            
                $('form').trigger('reset');
            });
            return false;
        });

        //Кнопка вверх
        //$(window) - всё окно браузера, следит за событием .scroll(), когда пользователь скроит страницу.
        $(window).scroll(function() {
          if($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });

        $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });

        //Анимация секций
        new WOW().init();

  });