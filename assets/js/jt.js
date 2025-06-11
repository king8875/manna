


// 모바일
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.content--bot-more');
    const desc = document.querySelector('.content--bot-desc');
    const descDeco = document.querySelector('.video_content--bottom');
    function updateToggleBehavior() {
        const width = window.innerWidth;

        if (width < 1020) { //모바일일 때
            toggleBtn.style.display = 'inline-block';
            toggleBtn.innerHTML = desc.classList.contains('expanded') ? '<i class="fa fa-chevron-down"></i>' : '<i class="fa fa-chevron-up"></i>';

        } else {
            toggleBtn.textContent = desc.classList.contains('expanded') ? '더보기' : '간략히';
        }
    }

    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        desc.classList.toggle('expanded');

        updateToggleBehavior();
    });

    updateToggleBehavior();

    window.addEventListener('resize', updateToggleBehavior);
});






// Pc

// document.addEventListener("DOMContentLoaded", function () {

//     const toggleBtn = document.querySelector('.content--bot-more');
//     const desc = document.querySelector('.content--bot-desc');
//     toggleBtn.addEventListener('click', function (e) {
//         e.preventDefault();
//         desc.classList.toggle('expanded');
//         toggleBtn.textContent = desc.classList.contains('expanded') ? '더보기' : '간략히';
//     });

// });










// 설교 시리즈 스와이퍼
const serisswiper = new Swiper('.seris_section .swiper', {
    slidesPerView: 6,
    spaceBetween: 40,

    navigation: {
        nextEl: '.seris_section .swiper-button-next',
        prevEl: '.seris_section .swiper-button-prev',
    },
    on: {
        init: function () {
            updateArrowVisibility(this);
        },
        slideChange: function () {
            updateArrowVisibility(this);
        },
    }
});

// swiper common js
function updateArrowVisibility(swiper) {
    const section = swiper.el.closest('.lately_section') || swiper.el.closest('.seris_section');

    if (!section) return;

    const prevBtn = section.querySelector('.swiper-button-prev');
    const nextBtn = section.querySelector('.swiper-button-next');

    if (swiper.isBeginning) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = '';
    }

    if (swiper.isEnd) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = '';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.location-toggle');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const locationBox = btn.closest('.jttoday_location');
            locationBox.classList.toggle('open');
        });
    });
});




// train js 
// const selectBtn = document.querySelectorAll('.train_select--block .select--btn');

// selectBtn.forEach(btn => {
//     btn.addEventListener('click', function () {
//         const selectBox = btn.querySelector('.select_hidden--block');
//         if (selectBox) {
//             selectBox.classList.toggle('visible');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const selectBtns = document.querySelectorAll('.train_select--block .select--btn');

    selectBtns.forEach(btn => {
        const hiddenBlock = btn.querySelector('.select_hidden--block');

        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // 버튼 클릭 시 이벤트 버블링 막기
            hiddenBlock.classList.toggle('visible');
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.select_hidden--block.visible').forEach(block => {
            block.classList.remove('visible');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.train_body--item');

    items.forEach(item => {
        const separator = document.createElement('section');
        separator.className = 'train main_section_separator';

        // item 바로 뒤에 삽입
        item.parentNode.insertBefore(separator, item.nextSibling);
    });
});













const mm = gsap.matchMedia();

// mob
mm.add("(max-width:1020px)", function () {

    // 최근 설교 스와이퍼
    const latelyswiper = new Swiper('.lately_section .swiper', {
        slidesPerView: 3.1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.lately_section .swiper-button-next',
            prevEl: '.lately_section .swiper-button-prev',
        },
        on: {
            init: function () {
                updateArrowVisibility(this);
            },
            slideChange: function () {
                updateArrowVisibility(this);
            },
        }
    });

    // 설교 시리즈 스와이퍼
    const serisswiper = new Swiper('.seris_section .swiper', {
        slidesPerView: 3.1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.seris_section .swiper-button-next',
            prevEl: '.seris_section .swiper-button-prev',
        },
        on: {
            init: function () {
                updateArrowVisibility(this);
            },
            slideChange: function () {
                updateArrowVisibility(this);
            },
        }
    });

});

// pc
mm.add("(min-width:1021px)", function () {


    // 최근 설교 스와이퍼
    const latelyswiper = new Swiper('.lately_section .swiper', {
        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.lately_section .swiper-button-next',
            prevEl: '.lately_section .swiper-button-prev',
        },
        on: {
            init: function () {
                updateArrowVisibility(this);
            },
            slideChange: function () {
                updateArrowVisibility(this);
            },
        }
    });


    // 설교 시리즈 스와이퍼
    const serisswiper = new Swiper('.seris_section .swiper', {
        slidesPerView: 6,
        spaceBetween: 40,

        navigation: {
            nextEl: '.seris_section .swiper-button-next',
            prevEl: '.seris_section .swiper-button-prev',
        },
        on: {
            init: function () {
                updateArrowVisibility(this);
            },
            slideChange: function () {
                updateArrowVisibility(this);
            },
        }
    });

});




