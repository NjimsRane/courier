/*****************date***************/
const setDate = document.querySelector('#set-date');

/*****************reviews***************/
const imgProfil = document.querySelector('#profil-picture');
const profilName = document.querySelector('#profil-name');
const desc = document.querySelector('.profil-description');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const profil = document.querySelector('.profil');


// /*****************main ***************/
const mainCourier = document.querySelector('.main-courier');

const header = document.querySelector('#header');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgers = document.querySelectorAll(".hamburger");
const nav = document.querySelector('#nav');
const menuLIst = document.querySelector('#menu-list');

// /*****************faq page ***************/
const faqBtns = document.querySelectorAll('button');
const faqQuestions = document.querySelectorAll('.question');






// /*****************faq logic ***************/
faqBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // traversing the DOM to get the grand parent element
        const question = e.currentTarget.parentElement.parentElement;
        // will close one tab when opening ans other one
        faqQuestions.forEach(item => {
            if (item !== question) item.classList.remove('show-text');
        });
        question.classList.toggle('show-text');

    });
});

// /*****************header appering on scroll ***************/
window.addEventListener('scroll', () => {
    let scrollHeight = window.scrollY;
    let headerHeight = header.getBoundingClientRect().height;
    (scrollHeight > headerHeight)
        ? header.classList.add('show-shadow')
        : header.classList.remove('show-shadow');
});

// hamburger menu
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


const dataCourier = [
    {
        img: '/Images/services/dress.svg',
        title: 'clothes',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
    {
        img: '/Images/services/wired.svg',
        title: 'electronics',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
    {
        img: '/Images/services/pill.svg',
        title: 'medicine',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
    {
        img: '/Images/services/ligth.svg',
        title: 'furniture',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
    {
        img: '/Images/services/fruit.svg',
        title: 'grocery',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
    {
        img: './Images/services/food.svg',
        title: 'food',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima harum beatae atque repella sapiente maiores optio quisquam ab dignissimos id? Unde possimus alias totam illo voluptatibus corporis natus? Provident animi culpa dolore, aperiam consectetur suscipit possimus sit exercitationem eum maiores repudiandae, consequuntur atque.Id dolorum eaque, beatae eos minus rem?'
    },
];


// /*****************courier***************/
const courier = () => {
    let displayItem = dataCourier.map(item => {
        return `
            <article class="main-courier-container reveal">
                <img src="${item.img}" alt="${item.title}" class="main-courier-image">
                <h4 class="main-courier-title">${item.title}</h4>
                <p class="main-courier-desc">
                    ${item.desc}
                </p>
            </article>
        `;
    }).join('');

    mainCourier.innerHTML = displayItem;
};
courier();






// /*****************reveal mode***************/
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


// /*****************reviews ***************/
const dataReviews = [
    {
        name: 'susan smith',
        img: '/Images/reviews/review-2.png',
        desc: 'Web developer dolor sit amet consectetur adipisicing elit. Harum officia tenetur minima nemo eos culpa repellat! Voluptatem placeat quas natus facilis repudiandae nemo ut, necessitatibus rerum qui a dictaquam, in, exercitationem quod repellendus voluptatum!'
    },
    {
        name: 'bill anderson',
        img: '/Images/reviews/review-1.png',
        desc: 'The boss dolor sit amet consectetur adipisicing elit. Harum officia tenetur minima nemo eos culpa repellat! Voluptatem placeat quas natus facilis repudiandae nemo ut, necessitatibus rerum qui a dictaquam, in, exercitationem quod repellendus voluptatum!'
    },
    {
        name: 'anna johnson',
        img: '/Images/reviews/review-4.png',
        desc: 'Web designer dolor sit amet consectetur adipisicing elit. Harum officia tenetur minima nemo eos culpa repellat! Voluptatem placeat quas natus facilis repudiandae nemo ut, necessitatibus rerum qui a dictaquam, in, exercitationem quod repellendus voluptatum!'
    },
    {
        name: 'peter janse',
        img: '/Images/reviews/review-3.png',
        desc: 'Intern dolor sit amet consectetur adipisicing elit. Harum officia tenetur minima nemo eos culpa repellat! Voluptatem placeat quas natus facilis repudiandae nemo ut, necessitatibus rerum qui a dictaquam, in, exercitationem quod repellendus voluptatum!'
    },

];
let currentItem = 0;

function load() {
    let item = dataReviews[currentItem];
    imgProfil.src = item.img;
    profilName.textContent = item.name;
    desc.textContent = item.desc;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > dataReviews.length - 1) currentItem = 0;
    load();
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) currentItem = dataReviews.length - 1;
    load();
});


// set time
setDate.textContent = new Date().getFullYear();