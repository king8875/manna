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
const mediaSwiper = new Swiper('.media_section .swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.media_section .swiper-button-next',
    prevEl: '.media_section .swiper-button-prev',
  },
});

const photoSwiper = new Swiper('.photo_section .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});