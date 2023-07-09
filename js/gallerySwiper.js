var swiperGallery = new Swiper('.gallery__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
             ' / ' +
             '<span class="' + totalClass + '"></span>';
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    570: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    571: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween:38,
    },
    1023: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1025: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1599: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});
