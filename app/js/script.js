$(".team__slider").slick({
    arrows: false,
    dots: true,
    dotsClass: 'my-dots',
    slidesToShow: 1,
    slidesToScroll: 1,

});

$(".achievements__slider").slick({
    arrows: false,
    dots: true,
    dotsClass: 'my-dots',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


(function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const body = document.querySelector("body");
    const overlay = document.querySelector(".header__overlay");

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    function toggleMenu() {
        menu.classList.toggle("show");
        burger.classList.toggle("show");
        overlay.classList.toggle("show");
        body.classList.toggle("stop-scroll");
    }
})();

