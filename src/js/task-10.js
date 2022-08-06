function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let widthHeight = 30;
function createBoxes() {
  const num = inputEl.value;
  console.log(num);

  for (let i = 1; i <= num; i += 1) {
    widthHeight += 10;
    boxesEl.insertAdjacentHTML(
      'afterbegin',
      `<div style="background-color:${getRandomHexColor()}; width:${widthHeight}px; height:${widthHeight}px"></div>`
    );
  }
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
