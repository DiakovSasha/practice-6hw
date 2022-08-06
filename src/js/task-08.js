const formEl = document.querySelector('.login-form');

function onInputValue(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert('Enter data plz');
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();
  return;
}

formEl.addEventListener('submit', onInputValue);
