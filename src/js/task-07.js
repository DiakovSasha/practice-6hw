const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onInputChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
inputEl.addEventListener('input', onInputChange);
