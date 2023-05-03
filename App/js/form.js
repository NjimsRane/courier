// /*****************forms ***************/
const loginForm = document.querySelector('#form-login');
const emailLogin = document.querySelector('#login-email');
const emailLoginError = document.querySelector('#email-login-error');
const passLogin = document.querySelector('#login-pass');
const passLoginError = document.querySelector('#pass-login-error');
const showPasswordBtn = document.querySelector('.hide-show-password');
const eyeImage = document.querySelector('.eye-img');

// /*****************forms logic***************/
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailLogin.value === '' && passLogin.value === '') {
        emailLoginError.textContent = 'Please enter your email';
        passLoginError.textContent = 'Please enter your password';
        emailLogin.classList.add('showError');
    }
    else if (emailLogin.value !== '' && passLogin.value === '') {
        emailLoginError.textContent = '';
        passLoginError.textContent = 'Please enter your password';
    }
    else if (emailLogin.value === '' && passLogin.value !== '') {
        emailLoginError.textContent = 'Please enter your email';
        passLoginError.textContent = '';
    } else {
        emailLoginError.textContent = '';
        passLoginError.textContent = '';
    }
});
showPasswordBtn.addEventListener('click', function () {
    if (passLogin.value === "") {
        return;
    } else if (passLogin.type === 'password') {
        passLogin.type = 'text';
        eyeImage.src = '/Images/pass/show.png';
    } else {
        passLogin.type = 'password';
        eyeImage.src = '/Images/pass/hide.png';
    }
});
