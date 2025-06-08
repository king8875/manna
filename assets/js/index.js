
// const testswiper = new Swiper('.test-swiper .swiper', {
//   slidesPerView: 3,
//   // spaceBetween: 10,
//   autoplay: {
//     delay: 3000, // 3초마다 슬라이드 전환
//     disableOnInteraction: false // 사용자가 터치/클릭해도 자동재생 계속
//   },
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true

//   },
//   navigation: {
//     nextEl: '.test-swiper .swiper-button-next',
//     prevEl: '.test-swiper .swiper-button-prev',
//   },
//   breakpoints:{
//     0: { slidesPerView: 1 },      // 모바일 ~ 999px
//     1000: { slidesPerView: 3 }    // 1000px 이상
//   }
// });


// let testSwiper = null;

// function toggleSwiper() {
//   const isMobile = window.innerWidth <= 1020;
//   const swiperContainer = document.querySelector('.photo_section .swiper');

//   if (isMobile) {
//     if (testSwiper !== null) {
//       testSwiper.destroy(true, true); // 완전히 제거
//       testSwiper = null;
//       swiperContainer.classList.remove('swiper'); // swiper 클래스를 직접 없애야 할 수도 있음
//     }
//   } else {
//     if (testSwiper === null) {
//       swiperContainer.classList.add('swiper'); // 필요 시 다시 추가
//         testSwiper = new Swiper('.photo_section .swiper', {
//         slidesPerView: "auto",
//         spaceBetween:20

//       });
//     }
//   }
// }
// toggleSwiper();
// window.addEventListener('resize', toggleSwiper);


// const swiperInstances = new Map();

// function toggleAllSwipers() {
//   const isMobile = window.innerWidth <= 1020;
//   const sections = document.querySelectorAll('.photo_section, .ask_section');

//   sections.forEach((section, index) => {
//     const container = section.querySelector('.swiper');
//     if (!container) return;

//     const swiperId = `swiper-${index}`;

//     if (isMobile) {
//       if (swiperInstances.has(swiperId)) {
//         swiperInstances.get(swiperId).destroy(true, true);
//         swiperInstances.delete(swiperId);
//       }
//     } else {
//       if (!swiperInstances.has(swiperId)) {
//         // wrapper & slide class 복원
//         const wrapper = container.querySelector('ul');
//         if (wrapper && !wrapper.classList.contains('swiper-wrapper')) {
//           wrapper.classList.add('swiper-wrapper');
//         }

//         const slides = wrapper.querySelectorAll('li');
//         slides.forEach(slide => {
//           if (!slide.classList.contains('swiper-slide')) {
//             slide.classList.add('swiper-slide');
//           }
//         });

//         // ✅ 클래스에 따라 다른 옵션 적용
//         let swiperOptions = {};

//         if (section.classList.contains('photo_section')) {
//           swiperOptions = {
//             slidesPerView: 'auto',
//             spaceBetween: 20,
//           };
//         } else if (section.classList.contains('ask_section')) {
//           swiperOptions = {
//             slidesPerView: 1,
//             loop: true,
//             pagination: {
//               el: container.querySelector('.swiper-pagination'),
//               clickable: true,
//             },
//           };
//         }

//         const swiper = new Swiper(container, swiperOptions);
//         swiperInstances.set(swiperId, swiper);
//       }
//     }
//   });
// }

// window.addEventListener('resize', toggleAllSwipers);
// window.addEventListener('load', toggleAllSwipers);


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
    1000: { slidesPerView: 4 }    // 1000px 이상
  }
});

const photoSwiper = new Swiper('.photo_section .swiper', {
  slidesPerView: "auto",
});

const askSwiper = new Swiper('.ask_section .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
});


// to top button
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



document.querySelectorAll(".nav_item").forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('active');
  });
  item.addEventListener('mouseleave', (e) => {
    item.classList.remove('active');
  });
});










document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.header .search_ic--block');
  const sideMenu = document.querySelector('.side_menu--block');
  const closeBtn = document.querySelector('.close--btn');
  const body = document.body;

  closeBtn.addEventListener("click", function() {
    sideMenu.classList.remove("active");
    body.classList.remove('scroll-lock');
  });

  toggleBtn.addEventListener('click', function () {
    const isOpen = sideMenu.classList.toggle('active');
    
    if (isOpen) {
      body.classList.add('scroll-lock');
    } else {
      body.classList.remove('scroll-lock');
    }
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






