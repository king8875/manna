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
    nextEl: '.photo_section .swiper-button-next',
    prevEl: '.photo_section .swiper-button-prev',
  },
});


document.querySelector("#GoToTop").addEventListener("click", function () {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1.5,
    ease: "power2.out"
  });
});







document.querySelectorAll(".mobilenav--block .nav_item a").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelectorAll(".mobilenav--block .nav_item a").forEach(function (link) {
      link.classList.remove("active");
    });

    this.classList.add("active");
  });
});


const mm = gsap.matchMedia();
// pc
mm.add("(min-width:1420)", function () {
 
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