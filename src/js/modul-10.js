// Додай відображення дати і часу в реальному часі
const timeFormEl = document.querySelector('.date span');

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

// const answer = prompt('Enter something');
// function checkAnswer(answer) {
//     return new Promise((resolve, reject) => {
//         const answerNum = Number(answer);
//         if (isNaN(answerNum)) {
//             reject("error");
//         }
//         if (answerNum % 2 === 0) {
//             setTimeout(() => {resolve("even")}, 1000);

//         }
//         if (answerNum % 2 !== 0) {
//             setTimeout(() => { resolve("odd") }, 2000);
//         }

//  })
// }
// checkAnswer(answer).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);

// })

// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.
function calculateAge(birthDate) {
  const userDate = new Date(birthDate);
  const nowDate = new Date();
  let years = nowDate.getFullYear() - userDate.getFullYear();
  const month = nowDate.getMonth() - userDate.getMonth();
  const days = nowDate.getDate() - userDate.getDate();
  if (month < 0 || (month === 0 && days < 0)) {
    years--;
  }
  return years;
}

console.log(calculateAge('2000-03-01'));
console.log(calculateAge('2000-03-10'));
console.log(calculateAge('2000-04-10'));
