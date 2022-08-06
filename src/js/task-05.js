const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


function onInputValue(event) {
    return event.currentTarget.value === ''
    ? (nameOutput.textContent = 'Anonymus')
    : (nameOutput.textContent = event.currentTarget.value);
}

inputEl.addEventListener('input', onInputValue);