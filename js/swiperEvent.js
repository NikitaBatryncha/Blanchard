let navigationNext = document.querySelector('.event__button--next');
let navigationPrev = document.querySelector('.event__button--prev');

function toggleDisabledClass() {
  if (window.innerWidth <= 1024) {
    navigationNext.classList.add('event-button-next-disabled');
    navigationPrev.classList.add('event-button-prev-disabled');
  } else {
    navigationNext.classList.remove('event-button-next-disabled');
    navigationPrev.classList.remove('event-button-prev-disabled');
  }
}
window.addEventListener('load', toggleDisabledClass);
window.addEventListener('resize', toggleDisabledClass);

var swiperEvent = new Swiper('.event__swiper', {
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".event__pagination"
      },
      navigation: false,
    },
    766: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".event__pagination"
      },
      navigation: false,
    },
    767: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: ".event__pagination"
      },
    },
    769: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: ".event__pagination"
      },
    },
    1023: {
      spaceBetween: 27,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: ".event__pagination"
      },
    },
    1024: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".event__pagination"
      },
    },
    1025: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: false,
      navigation: {
        nextEl: ".event__button--next",
        prevEl: ".event__button--prev",
      },
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      pagination: false,
      navigation: {
        nextEl: ".event__button--next",
        prevEl: ".event__button--prev",
      },
    },
    1441: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      pagination: false,
      navigation: {
        nextEl: ".event__button--next",
        prevEl: ".event__button--prev",
      },
    },
  },
});
