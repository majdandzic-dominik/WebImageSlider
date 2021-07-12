$(document).ready(function () {
    $("#nextSlide").on("click", function () {
        scrollSlideToRight(".top-row img");
        scrollSlideToRight(".bot-row img");
    });

    $("#prevSlide").on("click", function () {
        scrollSlideToLeft(".top-row img");
        scrollSlideToLeft(".bot-row img");
    });

    function scrollSlideToLeft(slideImages) {
        $(slideImages + ":last").detach().insertBefore(slideImages + ":first");
        let imgWidth = $(slideImages + ":first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));

        $(slideImages).css({ "transform": "translateX(" + (imgWidth + columnGap) + "px)", "right": 0, "left": "" });
        $(slideImages).animate({ right: (imgWidth + columnGap) + "px" }, 200);
    }

    function scrollSlideToRight(slideImages) {
        let imgWidth = $(slideImages + ":first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));

        $(slideImages).css({ "right": "", "transform": "" });

        $(slideImages).animate({ left: (imgWidth + columnGap) + "px" }, 200);
        $(slideImages).promise().done(function () {
            $(slideImages + ":first").detach().insertAfter(slideImages + ":last");
            $(slideImages).css({ "left": 0 });
        });

    }
});