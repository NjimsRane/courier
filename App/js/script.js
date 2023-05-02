const setDate = document.querySelector('#set-date');
setDate.textContent = new Date().getFullYear();


window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;
        (revealTop < windowHeight - revealPoint)
            ? reveals[i].classList.add('active')
            : reveals[i].classList.remove('active');
    }
}