const element = document.getElementById('year');
const currentYear = new Date().getFullYear();
element.innerHTML = currentYear;

let toggle = true;
const cursor = document.getElementById('name');

setInterval(() => {
    cursor.style.borderRightColor = toggle ? "transparent" : "#747fe0";
    toggle = !toggle;
}, 500);