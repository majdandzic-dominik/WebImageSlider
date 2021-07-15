$(document).ready(function () {

    let animationDuration = 200;

    $("#btnScrollRight").on("click", function () {
        scrollSlideToRight(".top-row img");
        scrollSlideToRight(".bot-row img");
    });

    $("#btnScrollLeft").on("click", function () {
        scrollSlideToLeft(".top-row img");
        scrollSlideToLeft(".bot-row img");
    });

    const setButtonDisabled = (isDisabled) => {
        $("#btnScrollRight").prop("disabled", isDisabled);
        $("#btnScrollLeft").prop('disabled', isDisabled);
    }

    const scrollSlideToRight = (slideImages) => {
        setButtonDisabled(true);

        let imgWidth = $(slideImages + ":first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));

        $(slideImages).css({ "right": "", "transform": "" });

        $(slideImages).animate({ left: (imgWidth + columnGap) + "px" }, animationDuration, function () { setButtonDisabled(false); });
        $(slideImages).promise().done(function () {
            $(slideImages + ":first").detach().insertAfter(slideImages + ":last");
            $(slideImages).css({ "left": 0 });
        });
    }

    const scrollSlideToLeft = (slideImages) => {
        setButtonDisabled(true);

        $(slideImages + ":last").detach().insertBefore(slideImages + ":first");
        let imgWidth = $(slideImages + ":first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));

        $(slideImages).css({ "transform": "translateX(" + (imgWidth + columnGap) + "px)", "right": 0, "left": "" });
        $(slideImages).animate({ right: (imgWidth + columnGap) + "px" }, animationDuration, function () { setButtonDisabled(false); });
    }
});