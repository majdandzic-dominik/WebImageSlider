"use strict";

var sliderColumnGap = 9;
var btnLeft = document.querySelector("#btnScrollLeft");
var btnRight = document.querySelector("#btnScrollRight");
var topRowImages = document.querySelector(".top-row");
var botRowImages = document.querySelector(".bot-row");
btnLeft.addEventListener("click", function () {
  scrollSlideToLeft(topRowImages);
  scrollSlideToLeft(botRowImages);
});
btnRight.addEventListener("click", function () {
  scrollSlideToRight(topRowImages);
  scrollSlideToRight(botRowImages);
});

var setButtonDisabled = function setButtonDisabled(isDisabled) {
  btnLeft.disabled = isDisabled;
  btnRight.disabled = isDisabled;
};

var scrollSlideToLeft = function scrollSlideToLeft(slideImages) {
  setButtonDisabled(true);
  var imgList = slideImages.children;
  var numOfImgs = imgList.length;
  var firstImg = imgList[0];
  var lastImg = imgList[numOfImgs - 1];
  var imgWidth = lastImg.clientWidth; //put last image to the begining and shift images to the right instantly without animation

  slideImages.classList.add("no-transitions");
  slideImages.style.transform = "translateX(" + (imgWidth + sliderColumnGap) + "px)";
  slideImages.insertBefore(lastImg, firstImg); //slide images to the left with animation

  setTimeout(function () {
    slideImages.classList.remove("no-transitions");
    slideImages.style.transform = "translateX(" + 0 + "px)";
  }, 1);
  slideImages.addEventListener("transitionend", function handler(e) {
    setButtonDisabled(false);
    e.currentTarget.removeEventListener(e.type, handler);
  });
};

var scrollSlideToRight = function scrollSlideToRight(slideImages) {
  setButtonDisabled(true);
  var imgList = slideImages.children;
  var numOfImgs = imgList.length;
  var firstImg = imgList[0];
  var lastImg = imgList[numOfImgs - 1];
  var imgWidth = firstImg.clientWidth; //slide images to the right with animation

  slideImages.style.transform = "translateX(" + (imgWidth + sliderColumnGap) + "px)"; //move first image to the end and shift images back to initial state without animation

  slideImages.addEventListener("transitionend", function handler(e) {
    slideImages.classList.add("no-transitions");
    slideImages.insertBefore(firstImg, lastImg.nextSibling);
    slideImages.style.transform = "translateX(" + 0 + "px)";
    setTimeout(function () {
      slideImages.classList.remove("no-transitions");
    }, 1);
    setButtonDisabled(false);
    e.currentTarget.removeEventListener(e.type, handler);
  });
};