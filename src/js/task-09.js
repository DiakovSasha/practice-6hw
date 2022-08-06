function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

function onChangeColor() {
  const RANDOM_COLOR = getRandomHexColor();
  document.body.style.backgroundColor = RANDOM_COLOR;
  colorText.textContent = RANDOM_COLOR;
}
btn.addEventListener('click', onChangeColor);
