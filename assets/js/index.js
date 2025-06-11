
const swiper = new Swiper('.visual-swiper--section .swiper', {
  loop: true,
  navigation: {
    nextEl: '.visual-swiper--section .swiper-button-next',
    prevEl: '.visual-swiper--section .swiper-button-prev',
  },

});
const campswiper = new Swiper('.camp_swiper_mobile.swiper', {
  navigation: {
    nextEl: '.camp_swiper_mobile .swiper-button-next',
    prevEl: '.camp_swiper_mobile .swiper-button-prev',
  },
});
const newSwiper = new Swiper('.news_content--block .swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
});

const firstmediaSwiper = new Swiper('.media_content--top.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    0: { slidesPerView: 1 },      // 모바일 ~ 999px
    1000: { slidesPerView: 2 }    // 1000px 이상
  }
});
const mediaSwiper = new Swiper('.media_content--down .swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.media_section .swiper-button-next',
    prevEl: '.media_section .swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: "auto" },      // 모바일 ~ 999px
    1020: { slidesPerView: 4 }    // 1000px 이상
  }
});

const photoSwiper = new Swiper('.photo_section .swiper', {
  slidesPerView: "auto",
});

// const askSwiper = new Swiper('.ask_section .swiper', {
//   slidesPerView: 1,
//   spaceBetween: 20,
// });




// // 모바일
// document.addEventListener('DOMContentLoaded', function () {
//   function updateToggleBehavior() {
//     const width = window.innerWidth;

//     if (width < 1020) { //모바일일 때
//       const askSwiper = new Swiper('.ask_section .swiper', {
//         slidesPerView: 1,
//         spaceBetween: 0,
//       });
//     } else {
//       console.log('ewfew');
//     }
//   }

//   updateToggleBehavior();

//   window.addEventListener('resize', updateToggleBehavior);
// });







const mm = gsap.matchMedia();
// pc
mm.add("(min-width:1021)", function () {



});
// mob
mm.add("(max-width:1020)", function () {

  const campswiper = new Swiper('.camp_swiper_mobile.swiper', {
    navigation: {
      nextEl: '.camp_swiper_mobile .swiper-button-next',
      prevEl: '.camp_swiper_mobile .swiper-button-prev',
    },
  });

});






