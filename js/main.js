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

// кнопка header__burger
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    document.body.style.height = null;
    document.body.style.overflow = null;
  } else {
    document.body.scrollTo(0, 0);
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
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
  header.classList.remove("active");
  document.body.style.height = null;
  document.body.style.overflow = null;
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