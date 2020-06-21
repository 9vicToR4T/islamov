$(window).load(function () {
    $(".before-after").twentytwenty({
        move_slider_on_hover: true,
    });

    $(".before-slider").slick({
        dotsClass: 'before-slider-dots',
        dots: true,
        //infinite: true,
        //autoplay: true,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left'),
        draggable: false,
        arrows: true,
        // autoplaySpeed:1500,     
        slidesToShow: 1,

    });

    $('.catalog-card').hover(
        function () {
            $(this).children(".catalog-card__buttons").toggleClass("btn_apear");
        }

    );
});