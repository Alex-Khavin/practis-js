// Додай відображення дати і часу в реальному часі
const timeFormEl = document.querySelector(".date span");

// timeFormEl.textContent = new Date().toLocaleString("en-US");
timeFormEl.textContent = new Date().toLocaleString();
setInterval(() => {
    timeFormEl.textContent = new Date().toLocaleString();
}, 1000);

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const answer = prompt('Enter something');
function checkAnswer(answer) {
    return new Promise((resolve, reject) => {
        const answerNum = Number(answer);
        if (isNaN(answerNum)) {
            reject("error");
        } 
        if (answerNum % 2 === 0) {
            setTimeout(() => {resolve("even")}, 1000);

        }
        if (answerNum % 2 !== 0) {
            setTimeout(() => { resolve("odd") }, 2000);
        }

 })
}
checkAnswer(answer).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})

