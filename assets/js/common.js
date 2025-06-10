//header gsap
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const MobileNavbar = document.querySelector('.mobile_nav_bar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        gsap.to(header, { y: '-100%', duration: 0.5 });
        gsap.to(MobileNavbar, { y: '100%', duration: 0.5 });
    } else {
        gsap.to(header, { y: '0%', duration: 0.5 });
        gsap.to(MobileNavbar, { y: '0%', duration: 0.5 });

    }
    lastScrollY = currentScrollY;
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




// sidemenu target js
document.querySelectorAll('.side_bottom--left a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.dataset.target;
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header_inner.pc .search_ic--block');
    const sideMenuInner = document.querySelector('.side_menu--inner');
    const sideMenu = document.querySelector('#sideMenu');
    const closeBtn = document.querySelector('.close--btn');
    const sideOverlay = document.querySelector('.side_menu_overlay');
    const body = document.body;


    // 닫기
    closeBtn.addEventListener("click", function () {
        sideMenuInner.classList.remove("active");
        sideMenu.classList.remove("active");
        body.classList.remove('scroll-lock');
        sideOverlay.classList.remove('active');
    });

    toggleBtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        const isOpen = sideMenuInner.classList.toggle('active');
        body.classList.add('scroll-lock');
        sideOverlay.classList.toggle('active');

    });
});



const headerSearchIcon = document.querySelector('.header_mobile .search_ic--block');
const sideMobile = document.querySelector('.side_menu--block--mobile');
const closeBtn = document.querySelector('.side_menu--block--mobile #closeBtn');
const body = document.body;
const sideOverlay = document.querySelector('.side_menu_overlay');


headerSearchIcon.addEventListener("click", function () {
    sideMobile.classList.add('active');
    body.classList.add('scroll-lock');

});
closeBtn.addEventListener("click", function () {
    sideMobile.classList.remove('active');
    body.classList.remove('scroll-lock');

});
