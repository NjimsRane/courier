const header = document.querySelector('#header');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgers = document.querySelectorAll(".hamburger");
const nav = document.querySelector('#nav');
const menuLIst = document.querySelector('#menu-list');

window.addEventListener('scroll', () => {
    let scrollHeight = window.scrollY;
    let headerHeight = header.getBoundingClientRect().height;
    (scrollHeight > headerHeight)
        ? header.classList.add('show-shadow')
        : header.classList.remove('show-shadow');
});


hamburgerMenu.addEventListener('click', () => {
    hamburgers.forEach(hamburger => {
        hamburger.classList.toggle('active');
    });

    let menuListHeight = menuLIst.getBoundingClientRect().height;
    let navHeight = nav.getBoundingClientRect().height;

    (navHeight === 0)
        ? nav.style.height = `${menuListHeight}px`
        : nav.style = 0;
});