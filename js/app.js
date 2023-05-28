'use strict'

let slider = new Swiper('.page', {
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",

  direction: "vertical",

  sliderPerView: "auto",

  parallax: true,

  keyboard: {
    enabled: true,

    onlyInViewPort: true,

    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,

  },
  watchOverflow: true,

  speed: 800,

  observerParents: true,
  scrollbar: {
    el: ".page__scroll",
    dragClass: "page__drag-scroll",
    draggable: true,
  },

  // simulateTouch: true
})
