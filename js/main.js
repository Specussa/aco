// start height
var oldWidth = window.innerWidth;
const docheight = document.documentElement
const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)};
window.addEventListener('resize', appHeight);
appHeight();

const circle = document.querySelector('.circle');
if(circle){
  const appCircle = () => {docheight.style.setProperty('--circle', `${circle.offsetWidth}px`)};
  window.addEventListener('resize', appCircle);
  appCircle();
}
// end

// при скролле header
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
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
    searchoverlay.classList.remove("active");
    hsearch.classList.remove("hidden");
    hcart.classList.remove("hidden");
    hlogin.classList.remove("hidden");
    if (window.scrollY > 1) {} else {header.classList.remove("active");}
    document.body.style.height = null;
    document.body.style.overflow = null;
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
    hsearch.classList.remove("hidden");
    hcart.classList.remove("hidden");
    hlogin.classList.remove("hidden");
    searchoverlay.classList.remove("active");
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }
})
// end

// кнопка header__burger
const hsearch = document.querySelector('.header__search');
const hcart = document.querySelector('.header__cart');
const hlogin = document.querySelector('.header__login');
const searchoverlay = document.querySelector('.search__overlay');

if (hsearch) {
  hsearch.addEventListener('click', function() {
    if (searchoverlay.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu.classList.remove("active");
      burger.classList.remove("active");
      hsearch.classList.remove("hidden");
      hcart.classList.remove("hidden");
      hlogin.classList.remove("hidden");
      searchoverlay.classList.remove("active");
      if (window.scrollY > 1) {} else {header.classList.remove("active");}
      document.body.style.height = null;
      document.body.style.overflow = null;
    } else {
      bodyoverlay.classList.add("active");
      menu.classList.add("active");
      burger.classList.add("active");
      header.classList.add("active");
      hsearch.classList.add("hidden");
      hcart.classList.add("hidden");
      hlogin.classList.add("hidden");
      searchoverlay.classList.add("active");
      menu.classList.remove("active");
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  })
}
// end

// кнопка header__burger
const buttonorder = document.querySelector('.button__order');
const orderoverlay = document.querySelector('.order__overlay');
const orderclose = document.querySelector('.order__close');

if (buttonorder) {
  buttonorder.addEventListener('click', function() {
    if (orderoverlay.classList.contains("active")) {
      bodyoverlay.style.zIndex = null;
      bodyoverlay.classList.remove("active");
      orderoverlay.classList.remove("active");
      document.body.style.height = null;
      document.body.style.overflow = null;
    } else {
      bodyoverlay.style.zIndex = "120";
      bodyoverlay.classList.add("active");
      orderoverlay.classList.add("active");
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  })
  orderclose.addEventListener('click', function() {
    bodyoverlay.style.zIndex = null;
    bodyoverlay.classList.remove("active");
    orderoverlay.classList.remove("active");
    document.body.style.height = null;
    document.body.style.overflow = null;
  })
}
// end

// кнопка overlay
const neworderoverlay = document.querySelector(".neworder__overlay");
bodyoverlay.addEventListener('click', function() {
  bodyoverlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  hsearch.classList.remove("hidden");
  hcart.classList.remove("hidden");
  hlogin.classList.remove("hidden");
  if (orderoverlay) {
    bodyoverlay.style.zIndex = null;
    orderoverlay.classList.remove("active");
  }
  if (neworderoverlay) {
    bodyoverlay.style.zIndex = null;
    neworderoverlay.classList.remove("active");
  }
  if (window.scrollY > 1) {} else {header.classList.remove("active");}
  document.body.style.height = null;
  document.body.style.overflow = null;
})
// end

// link menu
var headernav = document.querySelector(".header__nav");
var headernavlink = document.querySelectorAll(".header__nav a");
if(headernav){
  for (i = 0; i < headernavlink.length; i++) {
    headernavlink[i].onclick = function(e) {
      bodyoverlay.classList.remove("active");
      menu.classList.remove("active");
      burger.classList.remove("active");
      if (window.scrollY > 1) {} else {header.classList.remove("active");}
      document.body.style.height = null;
      document.body.style.overflow = null;
    };
  }
}
// end

// start year
const year = document.querySelector('.footer__year');
if(year){
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start search
const searchOverlayInput = document.querySelector('#search__overlay_input');
const searchOverlayClear = document.querySelector('#search__overlay_del');
const searchOverlayIcon = document.querySelector('#search__overlay_icon');
const searchInput = document.querySelector('#search__input');
const searchClear = document.querySelector('#search__del');
const searchIcon = document.querySelector('#search__icon');

if (searchClear || searchInput) {
  searchClear.addEventListener('click', function () {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
  });
  searchInput.addEventListener('input', function() {
    searchClear.classList.toggle('active', this.value);
    searchIcon.classList.toggle('active', !this.value);
  });
}
// end search

// start best__sliders
const bestsliders = document.querySelector('.best__sliders');
if(bestsliders){
  var bestSlider = new Swiper('.best__slider', {
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
      766: {
        spaceBetween: 10,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
  var bestThumbs = new Swiper('.best__thumbs', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 2,
    touchRatio: 0.2,
    loopedSlides: 2,
    speed: 1000,
    slideToClickedSlide: true,
    allowTouchMove: true,
    breakpoints: {
      766: {
        spaceBetween: 10,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
  bestSlider.controller.control = bestThumbs;
  bestThumbs.controller.control = bestSlider;
}
// end best__sliders

// start partner__slider
const partnerslider = document.querySelector('.partner__slider');
if(partnerslider){
  var partnerSlider = new Swiper('.partner__slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    touchRatio: 0.2,
    loopedSlides: 2,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.partner__next',
      prevEl: '.partner__prev',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end partner__slider

// start related__slider
const relatedslider = document.querySelector('.related__slider');
if(relatedslider){
  var relatedSlider = new Swiper('.related__slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 4,
    touchRatio: 0.2,
    loopedSlides: 4,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.related__next',
      prevEl: '.related__prev',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end related__slider

// start related__slider
const relatedslidertwo = document.querySelector('.related__slider_two');
if(relatedslidertwo){
  var relatedSlider = new Swiper('.related__slider_two', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 4,
    touchRatio: 0.2,
    loopedSlides: 4,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.related__next_two',
      prevEl: '.related__prev_two',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end related__slider

// start related__slider
const relatedsliderthree = document.querySelector('.related__slider_three');
if(relatedsliderthree){
  var relatedSlider = new Swiper('.related__slider_three', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 4,
    touchRatio: 0.2,
    loopedSlides: 4,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.related__next_three',
      prevEl: '.related__prev_three',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end related__slider

// start related__slider
const relatedsliderfour = document.querySelector('.related__slider_four');
if(relatedsliderfour){
  var relatedSlider = new Swiper('.related__slider_four', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 4,
    touchRatio: 0.2,
    loopedSlides: 4,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.related__next_four',
      prevEl: '.related__prev_four',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end related__slider

// start largepanel__slider
const largepanelslider = document.querySelector('.largepanel__slider');
if(largepanelslider){
  var relatedSlider = new Swiper('.largepanel__slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    touchRatio: 0.2,
    loopedSlides: 1,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: '.largepanel__next',
      prevEl: '.largepanel__prev',
    },
    breakpoints: {
      766: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1919: {
        spaceBetween: 20,
      }
    }
  });
}
// end largepanel__slider

// start equipments__slider
const equipmentsslider = document.querySelector('.equipments__slider');
if(equipmentsslider){
  var relatedSlider = new Swiper('.equipments__slider', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: false,
    allowTouchMove: false,
    breakpoints: {
      1199: {
        slidesPerView: 3,
        slideToClickedSlide: true,
        allowTouchMove: true,
      },
      766: {
        slidesPerView: 2,
        slideToClickedSlide: true,
        allowTouchMove: true,
      },
    }
  });
}
// end equipments__slider

// map
// start click map link
let idyamoscow = document.getElementById('yamoscow');
let idyamo = document.getElementById('yamo');
const mapalink = document.querySelectorAll('.map__list .map__link');

function yamoscow() {
  if (idyamoscow.classList.contains("active")) {
    myMap.setCenter([55.753215,37.622504],9);
    mapalink.forEach(n => n.classList.remove('active'));
    delmappoint();
  } else {
    mapalink.forEach(n => n.classList.remove('active'));
    myMap.setCenter([55.715423,37.646013],17);
    idyamoscow.classList.add("active");
    document.querySelector('#mapmoscow').classList.add("map__active");
  };
}
function yamo() {
  if (idyamo.classList.contains("active")) {
    myMap.setCenter([55.826867,37.120957],9);
    mapalink.forEach(n => n.classList.remove('active'));
    delmappoint();
  } else {
    mapalink.forEach(n => n.classList.remove('active'));
    myMap.setCenter([55.826867,37.120957],17);
    idyamo.classList.add("active");
    document.querySelector('#mapmo').classList.add("map__active");
  };
}
// end

// start del active points
function delmappoint() {
  document.querySelector('#mapmoscow').classList.remove("map__active");
  document.querySelector('#mapmo').classList.remove("map__active");
  mapalink.forEach(n => n.classList.remove('active'));
}
// end

// start yandex map
const maps = document.getElementById("map");
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.753215, 37.622504],
      zoom: 9, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if(oldWidth <= 1200){
      myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="currentColor"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">115114, г. Москва, Павелецкая наб, 2-с1, офис 102</div>\
          </div>\
        </div>',
        "latitude": 55.715423,
        "longitude": 37.646013,
        },{
        "infoPoint": '<div id="mapmo" class="map__point{% if properties.active %} map__active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="currentColor"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">деревня Лобаново, 256</div>\
          </div>\
        </div>',
        "latitude": 55.826867,
        "longitude": 37.120957,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-30, -30], [30, 30]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });
      var idmap = document.querySelectorAll('.map__item');

      var mapmoscow = document.getElementById('mapmoscow');
      if (mapmoscow.classList.contains("map__active")) {
        myMap.setCenter([55.715423,37.646013],17);
        idyamoscow.classList.add("active");
      } else {
        myMap.setCenter([55.753215,37.622504],9);
        mapalink.forEach(n => n.classList.remove('active'));
      };
      var mapmo = document.getElementById('mapmo');
      if (mapmo.classList.contains("map__active")) {
        myMap.setCenter([55.826867,37.120957],17);
        idyamo.classList.add("active");
      } else {};
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map
// end map

// start collapse/expand text //
let expand = document.querySelectorAll(".equipment__description .equipment__expand_btn");
for (let i = 0; i < expand.length; i++) {
  console.log(expand[i].previousElementSibling.clientHeight)
  if (expand[i].previousElementSibling.clientHeight > 60) {
    expand[i].previousElementSibling.style.maxHeight = "60px";
  } else {
    expand[i].style.display = "none";
  }
  expand[i].onclick = function(e) {
    var expandText = this.previousElementSibling;
    if (expand[i].classList.contains("active")) {
      expandText.style.maxHeight = "60px";
      this.previousElementSibling.classList.remove("active");
      expand[i].classList.remove("active");
      expand[i].innerText = "Развернуть";
    } else {
      expandText.style.maxHeight = expandText.scrollHeight + "px";
      this.previousElementSibling.classList.add("active");
      expand[i].classList.add("active");
      this.innerText = "Свернуть";
    }
  }
}
// end collapse/expand text //

// start new tabs
const newtabs = document.querySelector('.new_tabs');

if (newtabs) {
  var tnf = document.getElementsByClassName("tabs__navigation_first");
  for (i = 0; i < tnf.length; i++) {
    tnf[i].onclick = function(e) {
      var tnfb = this.parentElement.parentElement.nextElementSibling.children[0];
      var tnsb = this.parentElement.parentElement.nextElementSibling.children[1];
      if (tnfb.classList.contains("hidden")) {
        this.parentElement.nextElementSibling.children[0].classList.remove("active");
        tnsb.classList.add("hidden");
        tnfb.classList.remove("hidden");
        this.classList.add("active");
      }
    };
  }
  var tns = document.getElementsByClassName("tabs__navigation_second");
  for (i = 0; i < tns.length; i++) {
    tns[i].onclick = function(e) {
      var tnfb = this.parentElement.parentElement.nextElementSibling.children[0];
      var tnsb = this.parentElement.parentElement.nextElementSibling.children[1];
      if (tnsb.classList.contains("hidden")) {
        this.parentElement.previousElementSibling.children[0].classList.remove("active");
        tnfb.classList.add("hidden");
        tnsb.classList.remove("hidden");
        this.classList.add("active");
      }
    };
  }
}
// end new tabs

/*** Tabs ***/
const tabs = document.querySelector('.js-tabs');

if (tabs) {
  $('.js-tabs .tabs__navigation-link').on('click', function (e) {
    e.preventDefault();

    const thisAnchor = $(this).attr('href');
    const thisTarget = $(thisAnchor);
    const thisDataAttr = $(this).attr('data-type');
    const profileSection = $('section.profile');

    $('.js-tabs .tabs__navigation-link').removeClass('active');
    $(this).addClass('active');
    $('.tabs__content-item').hide();
    thisTarget.show();

    // orders active
    thisDataAttr === 'orders' ? profileSection.addClass('orders-tab') : profileSection.removeClass('orders-tab');
  });
}

/*** Change avatar ***/
if ($('.js-change-avatar')) {
  $('.js-change-avatar').on('click', function () {
    $('.js-change-avatar ~ .change-image-popup').show();
  });

  $(document).mouseup(function (e) {
    const div = $(".change-image-popup");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.change-image-popup').hide();
    }
  });

// Delete img
  $('.js-delete-img').on('click', function () {
    console.log('delete avatar');

    $('.change-image-popup').hide();
  });

// Choose file
  $('.js-change-img').on('click', function () {
    console.log('choose file');

    $('.user-avatar__field').click();
  });

// Change avatar
  $('.user-avatar__field').on('change', function () {
    console.log('change avatar');

    $('.change-image-popup').hide();
  });
}

/*** Order filter ***/
$('.js-order-filter .orders-heading__filters-item').on('click', function () {
  $('.js-order-filter .orders-heading__filters-item').removeClass('active');
  $(this).addClass('active');
});

/*** Switch hide/show password ***/
const visibilityPasswordSwitcher = $('.js-toggle-show-password');

if (visibilityPasswordSwitcher) {
  visibilityPasswordSwitcher.on('click', function () {
    const thisPrevInput = $(this).prev();

    if (thisPrevInput.attr('type') === 'password') {
      thisPrevInput.attr('type','text');
      $('.show-password-icon', this).removeClass('hidden');
      $('.hide-password-icon', this).addClass('hidden');
    } else {
      thisPrevInput.attr('type','password');
      $('.show-password-icon', this).addClass('hidden');
      $('.hide-password-icon', this).removeClass('hidden');
    }
  });
}

/*** Control submit button ***/
const controlInput = $('.js-control-submit');

if (controlInput) {
  controlInput.on('input', function () {
    const thisParentForm = $(this).closest('form');
    const thisValLength = $(this).val().length;

    thisValLength < 10 ? $('.from__submit', thisParentForm).addClass('btn--disabled') : $('.from__submit', thisParentForm).removeClass('btn--disabled');
  });
}

/*** Anchor scroll ***/
const anchor = $('.js-anchor');

if (anchor) {
  anchor.on('click', function (e) {
    e.preventDefault();

    const thisAnchorId = $(this).attr('href');
    const headerHeight = $('header').height();
    const anchorElemTop = $(thisAnchorId).offset().top

    $('body, html').animate({ scrollTop: anchorElemTop - headerHeight }, 500);
  });
}

/*** Registration ***/
const privacyCheck = $('.js-toggle-submit-disabled');

if (privacyCheck) {
  privacyCheck.on('click', function () {
    const registerSubmit = $('.js-registration-form [type="submit"]')[0];

    registerSubmit.classList.toggle('btn--disabled');
  });
}

function addOrg() {
  let neworg = document.querySelectorAll('.registration__neworg')
  let neworgLM = ((neworg[neworg.length-1]).getAttribute('name'));
  let neworgNM = Number(neworgLM) + 1;

  let elem = document.createElement("div");
  elem.classList.add('registration__neworg');
  elem.id = 'neworg_' + neworgNM;
  elem.setAttribute('name',neworgNM)
  elem.innerHTML = `
    <div class="form__group">
      <input class="form__input" type="text" name="UF_INN_${neworgNM}" id="innorg_${neworgNM}" placeholder="ИНН организации *" maxlength="50" required>
    </div>
    <div class="form__group">
      <input class="form__input" type="text" name="UF_COMPANY_NAME_${neworgNM}" id="nameorg_${neworgNM}" placeholder="Наименование организации *" maxlength="50" required>
    </div>
    <a class="registration__neworg_del" data-del="delete">Удалить организацию</a>
  `;

  let parentGuest = document.getElementById("neworg_"+neworgLM);
  parentGuest.parentNode.insertBefore(elem, parentGuest.nextSibling);
}
function removeElem(delElem, attribute, attributeName) {
  if (!(delElem && attribute && attributeName)) return;
  return function(e) {
    let target = e.target;
    if (!(target.hasAttribute(attribute) ?
        (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
    let elem = target;
    while (target != this) {
      if (target.classList.contains(delElem)) {
        target.remove();
        return;
      }
      target = target.parentNode;
    }
    return;
  };
}
document.addEventListener("click", removeElem("registration__neworg", "data-del", "delete"));

// start select
selectbox = document.querySelector('.select__box');
if (selectbox) {
  const SELECT = '[data-select]'
  const SELECT_LIST = '[data-select-list]'
  const SELECT_ARROW = '[data-select-arrow]'
  const SELECT_ACTION = '[data-select-action]'
  const SELECT_TITLE = '[data-select-title]'
  const SELECT_INPUT = '[data-select-input]'
  const SELECT_ITEM = 'selectItem'
  const OPEN_SELECT = 'selectOpen'

  class Select {
    static attach() {
      document.querySelectorAll(SELECT)
        .forEach(select => new Select().init(select))
    }

    init(select) {
      if (this.findSelect(select)) {
        this.applyListener()
      }
    }

    applyListener() {
      document.querySelector('*').addEventListener('click', e => {
        const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

        if (this.isCallSelectElement(element)) {
          if (this.isOpened()) {
            this.closeSelectList();
          } else {
            this.openSelectList()
          }
        }

        if (this.isCallSelectItemElement(element)) {
          this.addSelectedValue(element);
          document.querySelector(SELECT_TITLE).setAttribute('data-select-item', element.getAttribute('data-select-item'));
        }

        if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
          this.closeSelectList()
        }
      })
    }

    isCallSelectElement(element, target) {
      return element && OPEN_SELECT in element.dataset
    }

    isCallSelectItemElement(element, target) {
      return element && SELECT_ITEM in element.dataset
    }

    findSelect(select) {

      if (select) {
        this.select = select
        this.selectList = this.select.querySelector(SELECT_LIST)
        this.selectArrow = this.select.querySelector(SELECT_ARROW)
        this.selectTitle = this.select.querySelector(SELECT_TITLE)
        this.selectInput = this.select.querySelector(SELECT_INPUT)
        return true
      }
      return false
    }

    isOpened() {
      return this.selectList.classList.contains('select__list_opened')
    }

    openSelectList() {
      this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
      this.selectList.classList.add('select__list_opened')
      this.selectArrow.classList.add('select__arrow_rotate')
    }

    closeSelectList() {
      this.selectList.style.maxHeight = null;
      this.selectList.classList.remove('select__list_opened')
      this.selectArrow.classList.remove('select__arrow_rotate')
    }

    addSelectedValue(element) {
      this.selectTitle.innerText = element.innerText;
      this.selectInput.value = element.innerText;
      this.selectInput.setAttribute('value', this.selectInput.value);
    }

    selectOverlayIsClickedElement(element, target) {
      return element && 'select' in element.dataset
    }
  }

  Select.attach()
  
  const selectlc = document.querySelectorAll('.select__list');
  [...selectlc].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.setAttribute('data-select-item', index+1);}});
  const cartuserlogo = document.querySelectorAll('.cart__user_logo');
  [...cartuserlogo].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.setAttribute('data-select-item', index+1);}});
}

cartuser = document.querySelector('.select__list');
if (cartuser) {
  const cartuls = document.querySelectorAll('.cart__user_lists');
  [...cartuls].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.setAttribute('data-select-item', index+1);}});
  
  const cartuserAllList = document.querySelectorAll('.cart__user .cart__user_list');
  const cartuserlogoIMG = document.querySelectorAll('.cart__user_logo img');
  
  const selectid = function (obselect) {
    const SELECT_TITLE_COUNT = document.querySelector('[data-select-title]').getAttribute('data-select-item');
    cartuserAllList.forEach(n => n.classList.remove('active'));
    cartuserlogoIMG.forEach(n => n.classList.remove('active'));
    document.querySelector('.cart__user_list[data-select-item="' + SELECT_TITLE_COUNT + '"]').classList.add('active');
    document.querySelector('.cart__user_logo img[data-select-item="' + SELECT_TITLE_COUNT + '"]').classList.add('active');
  };
  const obselect = new MutationObserver(selectid);
  const config = {attributes: true};
  obselect.observe(document.querySelector('[data-select-title]'), config);
}
// end select

/*** org filter ***/
$('.js-org-filter .orgs-heading__filters-item').on('click', function () {
  $('.js-org-filter .orgs-heading__filters-item').removeClass('active');
  $(this).addClass('active');
});

// start повторить заказ
var neworderbtn = document.querySelector(".neworder__btn");
var neworderclose = document.querySelector(".neworder__close");
var neworderbtns = document.querySelectorAll(".neworder__btn");
if(neworderbtn){
  for (i = 0; i < neworderbtns.length; i++) {
    neworderbtns[i].onclick = function(e) {
      if (neworderoverlay.classList.contains("active")) {
        bodyoverlay.style.zIndex = null;
        bodyoverlay.classList.remove("active");
        neworderoverlay.classList.remove("active");
        document.body.style.height = null;
        document.body.style.overflow = null;
      } else {
        bodyoverlay.style.zIndex = "120";
        bodyoverlay.classList.add("active");
        neworderoverlay.classList.add("active");
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      }
    };
  }
  neworderclose.addEventListener('click', function() {
    bodyoverlay.style.zIndex = null;
    bodyoverlay.classList.remove("active");
    neworderoverlay.classList.remove("active");
    document.body.style.height = null;
    document.body.style.overflow = null;
  })
}
// end повторить заказ