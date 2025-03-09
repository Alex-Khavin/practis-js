// Додай відображення дати і часу в реальному часі
const timeFormEl = document.querySelector(".date span");

// timeFormEl.textContent = new Date().toLocaleString("en-US");
timeFormEl.textContent = new Date().toLocaleString();
setInterval(() => {
    timeFormEl.textContent = new Date().toLocaleString();
}, 1000);

