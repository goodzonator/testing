const mobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.main-menu a');
const headerInner = document.querySelector('.header__inner');
const mainMenu = document.querySelector('.main-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            mobileMenu.classList.remove('active');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

if (window.innerWidth >= 1200) {
    headerInner.appendChild(mainMenu);
}