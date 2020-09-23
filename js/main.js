// -----Slick Slider -------------------

$(document).ready(function () {
    $('.teachs-slider').slick({
        speed: 1000,
        easing: "ease",
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: true
    });
})

// ----- Плавный переход по странице с помощью меню --------------
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1100);
    });
});

$(document).ready(function () {
    $(".btn").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1100);
    });
});