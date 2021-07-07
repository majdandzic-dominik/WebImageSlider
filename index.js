$(document).ready(function () {
    $("#nextSlide").on("click", function () {
        $(".top-row img:last").detach().insertBefore(".top-row img:first");
        $(".bot-row img:last").detach().insertBefore(".bot-row img:first");
    });
});