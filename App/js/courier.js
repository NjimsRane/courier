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

const mainCourier = document.querySelector('.main-courier');

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

