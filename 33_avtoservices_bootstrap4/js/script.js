window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          button_menu = document.querySelector('.button_menu');

    button_menu.addEventListener('click', () => {
        button_menu.classList.toggle('button_menu_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            button_menu.classList.toggle('button_menu_active');
            menu.classList.toggle('menu_active');
        });
    });

    // Модальные окна
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close, .overlay').on('click', function(){
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

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
});