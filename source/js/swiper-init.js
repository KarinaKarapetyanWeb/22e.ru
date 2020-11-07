'use strict';

(function () {

  const reviews = document.querySelector('.reviews__swiper');
  const experts = document.querySelector('.experts__swiper');

  if (reviews) {
    const swiperReview = new Swiper('.reviews__swiper', {
      speed: 700,
      spaceBetween: 16,
      slidesPerView: 1.15,
      mousewheel: { 
        forceToAxis: true,
        eventsTarget: '.reviews__swiper'
      },
      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev',
        clickable: true
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,        
        }, 
        1280: {
          slidesPerView: 3.2,
        },
      }
    });
  }

  if (experts) {
    const swiperExpert = new Swiper('.experts__swiper', {
      speed: 700,
      spaceBetween: 16,
      slidesPerView: 1.15,
      mousewheel: { 
        forceToAxis: true,
        eventsTarget: '.experts__swiper'
      },
      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev',
        clickable: true
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,         
        }, 
        1280: {
          slidesPerView: 3.2,
        },
      }
    });
  }

})();