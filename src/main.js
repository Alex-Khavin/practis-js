// Перед вами форма для авторизації на сайті (правильні дані для входу збережені в обʼєкті USER_DATA)

// Розбийте код на кілька файлів:
// storage.js - функції для роботи зі сховищем;
// refs.js - посилання на всі потрібні елементи в html;
// main.js - головний файл, де вся основна логіка додатка.
// Ви маєте додати перевірку введених даних при сабміті:
// Якщо введені дані не збігаються зі збереженими, викликайте аlert і
// повідомляйте про помилку.

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми
// у локальне сховище і змінюйте кнопку Login на Logout, також робіть поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач авторизован, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// з локального сховища.

import { refs } from './js/refs';
import { saveData, getData, clearData } from './js/storage';

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'user-data';

refs.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const emailValue = refs.inputEmail.value.trim();
  const passValue = refs.inputPass.value.trim();
  if (refs.btn.textContent === `Logout`) {
    refs.form.reset();
    clearData(LS_KEY);
    refs.inputEmail.removeAttribute('readonly');
    refs.inputPass.removeAttribute('readonly');
    refs.btn.textContent = `Login`;
    return;
  }
  if (emailValue === '' || passValue === '') {
    alert('Заповніть усі поля!');
    return;
  }
  if (emailValue !== USER_DATA.email || passValue !== USER_DATA.password) {
    alert('Данні не коректні');
    return;
  }
  saveData(LS_KEY, { email: emailValue, password: passValue });
  refs.btn.textContent = 'Logout';
  refs.inputEmail.setAttribute('readonly', true);
  refs.inputPass.setAttribute('readonly', true);
}

document.addEventListener(`DOMContentLoaded`, () => {
  const data = getData(LS_KEY);
  if (data) {
    refs.inputEmail.value = data.email ?? ``;
    refs.inputPass.value = data.password ?? ``;
    refs.btn.textContent = 'Logout';
    refs.inputEmail.setAttribute('readonly', true);
    refs.inputPass.setAttribute('readonly', true);
  }
});
