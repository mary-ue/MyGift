const swiperThumb = new Swiper('.gift__swiper--thumb', {
  spaceBetween: 12,
  slidesPerView: 'auto', // swiper не будет рассчитывать width слайдов
  freeMode: true,
  breakpoints: {
    320: {
      spaceBetween: 12,
    },
    1141: {
      spaceBetween: 16,
    }
  }
});

const swiperMain = new Swiper('.gift__swiper--card', {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb,
  },
});
