import Choices from "choices.js";

const select = document.querySelector('#select-js');

const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    allowHTML: true,
});

const form = document.querySelector('.form');
const nameInput = document.querySelector('#form-name');
const emailInput = document.querySelector('#form-email');
const phoneInput = document.querySelector('#form-phone');
const selectInput = document.querySelector('#select-js');
const fileInput = document.querySelector('#form-file');
const fileLabel = document.querySelector('.form__upload-cv');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const selectError = document.querySelector('#select-error');

const namePattern = /^[a-zA-Z]{2,}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[0-9\(\)\-+ ]+$/;

function validateName() {
    if (!namePattern.test(nameInput.value)) {
        nameError.textContent = 'Invalid name';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePhone() {
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Invalid phone number';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}

function validateFile() {
    if (fileInput.files.length === 0) {
        fileLabel.classList.remove('loaded');
        fileLabel.classList.add('error');
        return false;
    } else {
        fileLabel.classList.remove('error');
        fileLabel.classList.add('loaded');
        return true;
    }
}

function validateSelect() {
    if (selectInput.value === '') {
        selectError.textContent = 'Choose your job type';
        selectInput.classList.add('error');
        return false;
    } else {
        selectError.textContent = '';
        selectInput.classList.remove('error');
        return true;
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault()
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isFileValid = validateFile();
    const isSelectValid = validateSelect();

    if (isNameValid && isEmailValid && isPhoneValid && isSelectValid && isFileValid) {
        console.log("Форма отправлена")
        form.classList.add('success');

        form.reset();
        choices.setChoiceByValue('');

        setTimeout(() => {
            form.classList.remove('success');
        }, 3000);
    }
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
fileInput.addEventListener('change', validateFile);
selectInput.addEventListener('change', validateSelect);