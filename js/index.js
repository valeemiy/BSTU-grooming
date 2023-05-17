const seasons = {
  winter: [
    "./assets/jpg/Olga.jpg",
    "./assets/jpg/Anna.jpg",
    "./assets/jpg/Konstantin.jpg",
    "./assets/jpg/Anastasiya.jpg",
    "./assets/jpg/Evgenia.jpg",
    "./assets/jpg/Maria.jpg",
  ],
  spring: [
    "./assets/jpg/more.jpg",
    "./assets/jpg/capibara.jpg",
    "./assets/jpg/lunao.jpg",
    "./assets/jpg/lodka.jpg",
    "./assets/jpg/pogoda.jpg",
    "./assets/jpg/zima.jpg",
  ],
  summer: [
    "./assets/jpg/spoki.jpg",
    "./assets/jpg/lunao.jpg",
    "./assets/jpg/capibara.jpg",
    "./assets/jpg/Anastasiya.jpg",
    "./assets/jpg/more.jpg",
    "./assets/jpg/oblako.jpg",
  ],
  autumn: [
    "./assets/jpg/zharkoe.jpg",
    "./assets/jpg/zakat.jpg",
    "./assets/jpg/volk.jpg",
    "./assets/jpg/stich.jpg",
    "./assets/jpg/Evgenia.jpg",
    "./assets/jpg/shar.jpg",
  ],
};

// // function tabs() {
// //     const tabs = document.querySelectorAll('.portfolio__button');
// //     const tabsContent = document.querySelectorAll('.portfolio__cards');
// //     const tabsParent = document.querySelector('.portfolio__buttons');

// //     function hideTabContent() {
// //         tabsContent.forEach((item) => {
// //             item.style.display = 'none';
// //         });
// //         tabs.forEach(item => {
// //             item.classList.remove('portfolio__button_active');
// //         });
// //     }

// //     function showTabContent(i = 0) {
// //         tabsContent[i].style.display = 'flex';
// //         tabs[i].classList.add('portfolio__button_active');
// //     }

// //     tabsParent.addEventListener('click', (e) => {
// //         const target = e.target;
// //         if (target && target.classList.contains('portfolio__button')) {
// //             tabs.forEach((item, index) => {
// //                 if (target == item) {
// //                     hideTabContent();
// //                     showTabContent(index);
// //                 }
// //             })
// //         }
// //     });

// //     hideTabContent();
// //     showTabContent();
// // }

// // // tabs();

// const shops = {
//     shop_1: [
//         './extends/jpg/1_1.jpg',
//         './extends/jpg/1_2.jpg',
//         './extends/jpg/1_3.jpg',
//         './extends/jpg/1_4.jpg',
//         './extends/jpg/1_5.jpg',
//         './extends/jpg/1_6.jpg'
//     ],
//     shop_2: [
//         './extends/jpg/2_1.jpg',
//         './extends/jpg/2_2.jpg',
//         './extends/jpg/2_3.jpg',
//         './extends/jpg/2_4.jpg',
//         './extends/jpg/2_5.jpg',
//         './extends/jpg/1_1.jpg'
//     ],
//     shop_3: [
//         './extends/jpg/3_1.jpg',
//         './extends/jpg/3_3.jpg',
//         './extends/jpg/3_4.jpg',
//         './extends/jpg/к3.jpg',
//         './extends/jpg/к6.jpg',
//         './extends/jpg/кк.jpg'
//     ],
//     shop_4: [
//         './extends/jpg/3_3.jpg',
//         './extends/jpg/3_4.jpg',
//         './extends/jpg/1_2.jpg',
//         './extends/jpg/1_3.jpg',
//         './extends/jpg/к6.jpg',
//         './extends/jpg/кк.jpg'
//     ],
// }

// function changeImage(event) {
//     shop = event.target.dataset.shop;
//     redrawPhoto(imagesCenter);

//     const shop = event.target.dataset.shop;
//     const seasonImages = document.querySelectorAll('.portfolio__img');
//     const buttons = document.querySelectorAll('.portfolio__button');
//     console.log(buttons);
//     Array.from(seasonImages).forEach((image, index) => image.src = shops[shop][index]);

//     Array.from(buttons).forEach(button => {
//         if (button.dataset.shop == shop) {
//             button.classList.add('portfolio__button_active');
//         } else {
//             button.classList.remove('portfolio__button_active');
//         };
//     });
// };

// function buttonClick(event) {
//     if (event.target.classList.contains('portfolio__button')) {
//         changeImage(event);
//     };
// };

// document.querySelector('.portfolio__buttons').addEventListener('click', buttonClick);

// //slider
// function shiftPhoto(arrow) {
//     let w;
//     if (window.innerWidth >= 1024){
//         w = 6;
//     }
//     else if (window.innerWidth >= 768 && window.innerWidth <=1023) {
//         w = 4;
//     }
//     else {
//         w = 1;
//     }
//     if (arrow == 'left') {
//         shops[shop] = shops[shop].slice(w).concat(shops[shop].slice(0, w));
//     } else if (arrow == 'right') {
//         shops[shop] = shops[shop].slice(-w).concat(shops[shop].slice(0, -w));
//     }
// }

// const slider = document.querySelector('.slider');

// const buttonLeft = document.querySelector('.button_slider_left');
// const buttonRight = document.querySelector('.button_slider_right');

// function sliderLeft() {
//     buttonLeft.removeEventListener('click', sliderRight);
//     buttonRight.removeEventListener('click', sliderLeft);
//     slider.classList.add('move_left');
//     shiftPhoto('left');
//     redrawPhoto(imagesRight);
// };

// function sliderRight() {
//     buttonLeft.removeEventListener('click', sliderRight);
//     buttonRight.removeEventListener('click', sliderLeft);
//     slider.classList.add('move_right');
//     shiftPhoto('right');
//     redrawPhoto(imagesLeft);
// };

// slider.addEventListener('animationend', () => {
//     redrawPhoto(imagesCenter);
//     slider.classList.remove('move_left');
//     slider.classList.remove('move_right');
//     buttonLeft.addEventListener('click', sliderRight);
//     buttonRight.addEventListener('click', sliderLeft);
// });

// buttonLeft.addEventListener('click', sliderRight);
// buttonRight.addEventListener('click', sliderLeft);

const shops = {
  shop_1: [
    "./assets/jpg/Olga.jpg",
    "./assets/jpg/Anna.jpg",
    "./assets/jpg/Konstantin.jpg",
    "./assets/jpg/Anastasiya.jpg",
    "./assets/jpg/Evgenia.jpg",
    "./assets/jpg/Maria.jpg",
  ],
  shop_2: [
    "./assets/jpg/more.jpg",
    "./assets/jpg/capibara.jpg",
    "./assets/jpg/lunao.jpg",
    "./assets/jpg/lodka.jpg",
    "./assets/jpg/pogoda.jpg",
    "./assets/jpg/zima.jpg",
  ],
  shop_3: [
    "./assets/jpg/spoki.jpg",
    "./assets/jpg/lunao.jpg",
    "./assets/jpg/capibara.jpg",
    "./assets/jpg/Anastasiya.jpg",
    "./assets/jpg/more.jpg",
    "./assets/jpg/oblako.jpg",
  ],
  shop_4: [
    "./assets/jpg/zharkoe.jpg",
    "./assets/jpg/zakat.jpg",
    "./assets/jpg/volk.jpg",
    "./assets/jpg/stich.jpg",
    "./assets/jpg/Evgenia.jpg",
    "./assets/jpg/shar.jpg",
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
