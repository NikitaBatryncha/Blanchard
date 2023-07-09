var swiperParthners = new Swiper('.parthners__swiper', {
  navigation: {
    nextEl: ".parthners__button--next",
    prevEl: ".parthners__button--prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    922: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    923: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
