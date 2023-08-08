// start height
var oldWidth = window.innerWidth;
const docheight = document.documentElement
const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
window.addEventListener('resize', appHeight)
appHeight()
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
    window.addEventListener('resize', appHeight)
    appHeight()
  }
};
// end

// кнопка header__burger
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.height = null;
    document.body.style.overflow = null;
  } else {
    document.body.scrollTo(0, 0);
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }
})
// end

// кнопка overlay
bodyoverlay.addEventListener('click', function() {
  bodyoverlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
})
// end

// start year
const year = document.querySelector('.footer__year');
if(year){
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year
const bestsliders = document.querySelector('.best__sliders');
if(bestsliders){
  var gallerySlider = new Swiper('.best__slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    touchRatio: 0.2,
    loopedSlides: 2,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.best__next',
      prevEl: '.best__prev',
    },
    breakpoints: {
      800: {
        spaceBetween: 20,
      }
    }
  });
  var galleryThumbs = new Swiper('.best__thumbs', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 2,
    touchRatio: 0.2,
    loopedSlides: 2,
    speed: 1000,
    slideToClickedSlide: true,
    allowTouchMove: true,
    breakpoints: {
      1700: {
        spaceBetween: 20,
      }
    }
  });
  gallerySlider.controller.control = galleryThumbs;
  galleryThumbs.controller.control = gallerySlider;
}