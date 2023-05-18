
const shops = {
  shop_1: [
    './Assets/jpg/Olga.jpg',
    './Assets/jpg/Anna.jpg',
    './Assets/jpg/Konstantin.jpg',
    './Assets/jpg/Anastasiya.jpg',
    './Assets/jpg/Evgenia.jpg',
    './Assets/jpg/Maria.jpg',
  ],
  shop_2: [
    "./Assets/jpg/more.jpg",
    "./Assets/jpg/capibara.jpg",
    "./Assets/jpg/lunao.jpg",
    "./Assets/jpg/lodka.jpg",
    "./Assets/jpg/pogoda.jpg",
    "./Assets/jpg/zima.jpg",
  ],
  shop_3: [
    "./Assets/jpg/spoki.jpg",
    "../Assets/jpg/lunao.jpg",
    "../Assets/jpg/capibara.jpg",
    "../Assets/jpg/Anastasiya.jpg",
    "../Assets/jpg/more.jpg",
    "../Assets/jpg/oblako.jpg",
  ],
  shop_4: [
    "./Assets/jpg/zharkoe.jpg",
    "../Assets/jpg/zakat.jpg",
    "../Assets/jpg/volk.jpg",
    "../Assets/jpg/stich.jpg",
    "../Assets/jpg/Evgenia.jpg",
    "../Assets/jpg/shar.jpg",
  ],
};

const imagesLeft = Array.from(
  document.querySelectorAll(".slider_left > li > img")
);
const imagesCenter = Array.from(
  document.querySelectorAll(".slider_center > li > img")
);
const imagesRight = Array.from(
  document.querySelectorAll(".slider_right > li > img")
);

let shop = "shop_1";

function redrawPhoto(arr) {
  arr.forEach((image, index) => (image.src = shops[shop][index]));
}

function changeImage(event) {
  shop = event.target.dataset.shop;
  redrawPhoto(imagesCenter);

  const buttons = document.querySelectorAll(".portfolio__button");
  console.log(buttons);
  buttons.forEach((button) => {
    if (button.dataset.shop == shop) {
      button.classList.add("portfolio__button_active");
    } else {
      button.classList.remove("portfolio__button_active");
    }
  });
}

function buttonClick(event) {
  if (event.target.classList.contains("portfolio__button")) {
    changeImage(event);
  }
}

document
  .querySelector(".portfolio__buttons")
  .addEventListener("click", buttonClick);

//slider
function shiftPhoto(arrow) {
  let w;
  if (window.innerWidth >= 1024) {
    w = 6;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    w = 4;
  } else {
    w = 1;
  }
  if (arrow == "left") {
    shops[shop] = shops[shop].slice(w).concat(shops[shop].slice(0, w));
  } else if (arrow == "right") {
    shops[shop] = shops[shop].slice(-w).concat(shops[shop].slice(0, -w));
  }
}

const slider = document.querySelector(".slider");

const buttonLeft = document.querySelector(".button_slider_left");
const buttonRight = document.querySelector(".button_slider_right");

function sliderLeft() {
  buttonLeft.removeEventListener("click", sliderRight);
  buttonRight.removeEventListener("click", sliderLeft);
  slider.classList.add("move_left");
  shiftPhoto("left");
  redrawPhoto(imagesRight);
}

function sliderRight() {
  buttonLeft.removeEventListener("click", sliderRight);
  buttonRight.removeEventListener("click", sliderLeft);
  slider.classList.add("move_right");
  shiftPhoto("right");
  redrawPhoto(imagesLeft);
}

slider.addEventListener("animationend", () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove("move_left");
  slider.classList.remove("move_right");
  buttonLeft.addEventListener("click", sliderRight);
  buttonRight.addEventListener("click", sliderLeft);
});

buttonLeft.addEventListener("click", sliderRight);
buttonRight.addEventListener("click", sliderLeft);



const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav');

burger.addEventListener('click', function(e) {
    this.classList.toggle('active');
    // navBar.classList.toggle('active__nav'); 
    if (navBar.classList.contains('nav__open')) {
        // console.log("Burger is opened");
        // navBar.classList.remove('nav__close');
        navBar.classList.remove('nav__open');
    } else {
        // console.log("Burger is closed");
        navBar.classList.add('nav__open');
        // navBar.classList.add('nav__close');
    }
})
