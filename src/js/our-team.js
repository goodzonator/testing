import Swiper from "swiper";
import {Navigation, Scrollbar} from "swiper/modules";

const tabs = document.querySelectorAll('.our-team__tab');
const contents = document.querySelectorAll('.our-team__tabs-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        const content = document.querySelector(target);
        content.classList.add('active');
    });
});

const outTeamSlider = document.querySelectorAll('.our-team-slider');

let loop = true;
let centeredSlides = true;
if (window.innerWidth >= 1200) {
    loop = false;
    centeredSlides = false;
}

outTeamSlider.forEach((container, index) => {
    new Swiper(container, {
        modules: [Navigation, Scrollbar],
        loop: loop,
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: centeredSlides,
        navigation: {
            prevEl: container.querySelector('.swiper-button__prev'),
            nextEl: container.querySelector('.swiper-button__next'),
        },
        scrollbar: {
            el: container.querySelector('.swiper-scrollbar'),
            draggable: true,
        },
        breakpoints: {
            1200: {
                spaceBetween: 20,
            }
        }
    })
});