const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;


function onDecrementBtn() {
  console.log('click decrement');
  counterValue -= 1;
  counter.textContent = counterValue;
}
function onIncrementBtn() {
  console.log('click increment');
  counter.textContent = counterValue;
  counterValue += 1;
}

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);