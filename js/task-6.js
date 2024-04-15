const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');
const numberInput = document.querySelector('#controls input');
btnCreate.addEventListener("click", function () {
        if (numberInput.value >= 1 && numberInput.value <= 100) {
            createBoxes(numberInput.value);
        }
        numberInput.value = '';
})
let baseSize = 30;
function createBoxes(amount) {
    boxes.innerHTML = "";
    let size = baseSize;
    const arr = [];
    for (let i = 0; i < amount; i++) {
        const boxColor = getRandomHexColor();
        arr[i] = `<div style="background-color: ${boxColor}; width: ${size}px; height:${size}px;"></div>` 
        size += 10;
    }
    const result = arr.join('')
    boxes.innerHTML = result;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnDestroy.addEventListener("click", function () {
    boxes.innerHTML = "";
})
