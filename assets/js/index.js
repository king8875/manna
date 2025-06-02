const swiper = new Swiper('.visual-swiper--section .swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const newSwiper = new Swiper('.news_content--block .swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
});