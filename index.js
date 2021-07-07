$(document).ready(function () {
    $("#nextSlide").on("click", function () {
        scrollSlide(".top-row img");
        scrollSlide(".bot-row img");
    });

    $("#prevSlide").on("click", function () {
        $(".top-row img:first").detach().insertAfter(".top-row img:last");
        $(".bot-row img:first").detach().insertAfter(".bot-row img:last");
    });

    function scrollSlide(slideImages) {
        $(slideImages + ":last").detach().insertBefore(slideImages + ":first");
        let imgWidth = $(slideImages + ":first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));
        console.log(imgWidth);
        $(slideImages).css({ "transform": "translateX(" + (imgWidth + columnGap) + "px)", "right": 0 });
        $(slideImages).animate({ right: (imgWidth + columnGap) + "px" }, 100);
    }
});