$(document).ready(function () {
    $("#nextSlide").on("click", function () {
        $(".top-row img:last").detach().insertBefore(".top-row img:first");
        $(".bot-row img:last").detach().insertBefore(".bot-row img:first");
        let topImgWidth = $(".top-row img:first").width();
        let columnGap = parseInt($(".slider-row").css("column-gap"));
        console.log(topImgWidth);
        $(".top-row img").css({"transform": "translateX(" + (topImgWidth + columnGap) + "px)", "right": 0});

        $(".top-row img").animate({ right: (topImgWidth + columnGap) + "px" }, 100);
        
    });

    $("#prevSlide").on("click", function () {
        $(".top-row img:first").detach().insertAfter(".top-row img:last");
        $(".bot-row img:first").detach().insertAfter(".bot-row img:last");
    });
});