const items = document.querySelectorAll('.partners__item');
const userImgContainer = document.querySelector('#partner-user-img');
const userImg = userImgContainer.querySelector('img');
const userSource = userImgContainer.querySelector('source');
const userName = document.querySelector('#partner-user-name');
const userJob = document.querySelector('#partner-user-job');
const userMessage = document.querySelector('#partner-user-message');

items.forEach(item => {
    item.addEventListener('click', function() {
        items.forEach(i => i.classList.remove('active'));

        item.classList.add('active');

        // Update profile information
        const imgSrc = item.getAttribute('data-img');
        const webpSrc = imgSrc.replace('.png', '.webp');

        userSource.srcset = webpSrc;
        userImg.src = imgSrc;
        userName.textContent = item.getAttribute('data-name');
        userJob.textContent = item.getAttribute('data-job');
        userMessage.textContent = item.getAttribute('data-message');
    });
});