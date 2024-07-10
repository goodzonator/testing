const popupWrapper = document.querySelector('.popup-wrapper');
const popupImgContainer = document.getElementById('popup-img');
const popupImg = popupImgContainer.querySelector('img');
const popupSource = popupImgContainer.querySelector('source');
const popupName = document.getElementById('popup-name');
const popupPosition = document.getElementById('popup-position');
const popupPhone = document.getElementById('popup-phone');
const popupEmail = document.getElementById('popup-email');
const openPopupButtons = document.querySelectorAll('.btn-open-popup');
const closePopupButton = document.querySelector('.popup__close');
const popupBg = document.querySelector('.popup-bg');

openPopupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const teamItem = button.closest('.our-team-slider__item');
        const imgSrc = teamItem.getAttribute('data-img');
        const webpSrc = imgSrc.replace('.jpg', '.webp');
        const name = teamItem.getAttribute('data-name');
        const position = teamItem.getAttribute('data-position');
        const phone = teamItem.getAttribute('data-phone');
        const email = teamItem.getAttribute('data-email');

        popupSource.srcset = webpSrc;
        popupImg.src = imgSrc;
        popupName.textContent = name;
        popupPosition.textContent = position;
        popupPhone.textContent = phone;
        popupEmail.textContent = email;

        popupWrapper.classList.add('active');
    });
});

function closePopup() {
    popupWrapper.classList.remove('active');
}

closePopupButton.addEventListener('click', closePopup);
popupBg.addEventListener('click', closePopup);