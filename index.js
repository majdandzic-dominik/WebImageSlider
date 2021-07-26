const sliderColumnGap = 9;

const btnLeft = document.querySelector("#btnScrollLeft");
const btnRight = document.querySelector("#btnScrollRight");

const topRowImages = document.querySelector(".top-row");
const botRowImages = document.querySelector(".bot-row");

btnLeft.addEventListener("click", () => {
    scrollSlideToLeft(topRowImages);
    scrollSlideToLeft(botRowImages);
});

btnRight.addEventListener("click", () => {
    scrollSlideToRight(topRowImages);
    scrollSlideToRight(botRowImages);
});

const setButtonDisabled = (isDisabled) => {
    btnLeft.disabled = isDisabled;
    btnRight.disabled = isDisabled;
}

const scrollSlideToLeft = (slideImages) => {
    setButtonDisabled(true);
    console.log(1);
    let imgList = slideImages.children;
    let numOfImgs = imgList.length;
    let firstImg = imgList[0];
    let lastImg = imgList[numOfImgs - 1];
    let imgWidth = lastImg.clientWidth;
    console.log(2);
    //put last image to the begining and shift images to the right instantly without animation
    slideImages.classList.add("no-transitions");
    slideImages.style.transform = "translateX(" + (imgWidth + sliderColumnGap) + "px)";
    slideImages.insertBefore(lastImg, firstImg);
    console.log(3);
    //slide images to the left with animation
    setTimeout(() => {
        slideImages.classList.remove("no-transitions")
        slideImages.style.transform = "translateX(" + 0 + "px)";
        console.log(4);
    }, 1);

    slideImages.addEventListener("transitionend", function handler(e) {
        console.log(5);
        setButtonDisabled(false);
        e.currentTarget.removeEventListener(e.type, handler);
    });
}

const scrollSlideToRight = (slideImages) => {
    setButtonDisabled(true);

    let imgList = slideImages.children;
    let numOfImgs = imgList.length;
    let firstImg = imgList[0];
    let lastImg = imgList[numOfImgs - 1];
    let imgWidth = firstImg.clientWidth;

    //slide images to the right with animation
    slideImages.style.transform = "translateX(" + (imgWidth + sliderColumnGap) + "px)";

    //move first image to the end and shift images back to initial state without animation
    slideImages.addEventListener("transitionend", function handler(e) {
        slideImages.classList.add("no-transitions");
        slideImages.insertBefore(firstImg, lastImg.nextSibling);
        slideImages.style.transform = "translateX(" + 0 + "px)";
        setTimeout(() => { slideImages.classList.remove("no-transitions") }, 1);
        setButtonDisabled(false);
        e.currentTarget.removeEventListener(e.type, handler);
    });
}