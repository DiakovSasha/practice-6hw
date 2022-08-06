const inputEl = document.querySelector('#validation-input');

function onValidationInput(event) {
  const normalizedNum = parseInt(event.currentTarget.dataset.length);
  console.log(normalizedNum);
  const inputValue = event.currentTarget.value.length;
  console.log(inputValue);
  if (inputValue === normalizedNum) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    return;
  }
}

inputEl.addEventListener('blur', onValidationInput);
