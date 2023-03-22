const inputField = document.querySelector("body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-item > nav > div > div");

const lessonsAll = document.querySelectorAll("body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-item > nav > div > app-lessons-timeline > ul > li").length;

const lessonsLearned = document.querySelectorAll("body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-item > nav > div > app-lessons-timeline > ul > li > a").length;

const homeworkDone = document.querySelectorAll(".lessons-timeline__item-link--success").length;

const homeworkNotDone = document.querySelectorAll(".lessons-timeline__item-link--danger").length;

renderYourSuccessRate();

function renderYourSuccessRate() {
    inputField.insertAdjacentHTML('afterbegin',
        `<div>
        <span> Пройдено уроків: ${lessonsLearned}</span><br>
        <span> Залишилось уроків: ${lessonsAll - lessonsLearned}</span><br>
        <span> ${conclusionLine()}</span>
        </div>`
    );
};

function conclusionLine() {
    if (lessonsLearned - 1 == homeworkDone) {
        return "Всі домашки виконано!"
    };

    if (homeworkNotDone > 0) { return `<span> Залишилось виконати (${homeworkNotDone})  завдань </span><br> <span> Виконано (${homeworkDone})  завдань </span>` };
}
