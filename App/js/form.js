const registerForm = document.querySelector('#register-form');
const emailLogin = document.querySelector('#login-email');
const emailLoginError = document.querySelector('#email-login-error');
const passLogin = document.querySelector('#login-pass');
const passLoginError = document.querySelector('#pass-login-error');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailLogin.value === '' && passLogin.value === '') {
        emailLoginError.textContent = 'Please enter you email';
        passLoginError.textContent = 'Please enter you password';
    }
    else if (emailLogin.value !== '' && passLogin.value === '') {
        emailLoginError.textContent = '';
        passLoginError.textContent = 'Please enter you password';
    }
    else if (emailLogin.value === '' && passLogin.value !== '') {
        emailLoginError.textContent = 'Please enter you email';
        passLoginError.textContent = '';
    } else {
        emailLoginError.textContent = '';
        passLoginError.textContent = '';
    }
});