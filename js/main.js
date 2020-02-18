$('.slider-one')
.not('slick-initialized')
.slick( {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});

$('.slider-two')
.not('slick-initialized')
.slick( {
    prevArrow: ".site-slider-two .slider-btn .prev",
    nextArrow: ".site-slider-two .slider-btn .next",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
});