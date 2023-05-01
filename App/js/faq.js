const faqBtns = document.querySelectorAll('button');
const faqQuestions = document.querySelectorAll('.question');



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
