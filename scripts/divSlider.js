let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let moveDivLeft = document.querySelector(".images-slider-right");

function imageSliderLeft() {
   moveDivLeft.style = "left: -40%"
}

function imageSliderRight() {
    moveDivLeft.style = "left: 20%"
}

arrowLeft.addEventListener('click', imageSliderLeft);
arrowRight.addEventListener('click', imageSliderRight);