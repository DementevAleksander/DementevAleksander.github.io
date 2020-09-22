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

        //Кнопка вверх
        $(window).scroll(function() {
          if($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });

  });