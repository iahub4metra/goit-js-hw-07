const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener('click', function() {
    body.style.backgroundColor = getRandomHexColor();
    const bodyColor = window.getComputedStyle(document.body).backgroundColor
    span.textContent = `${bodyColor}`;

})