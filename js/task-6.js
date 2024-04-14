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
    for (let i = 0; i < amount; i++) {
        
        const box = document.createElement('div');
        boxes.appendChild(box);
        box.className = 'box';
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();  
        size += 10;
    }
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnDestroy.addEventListener("click", function () {
    boxes.innerHTML = "";
})
