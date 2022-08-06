const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function createIngridient(ingridient) {
  console.log(ingridient);
  const ingrItem = document.createElement('li');
  ingrItem.textContent = ingridient;
  ingrItem.classList.add('item');
  ingrItem.style.cssText = 'color: green;font-size:55px;list-style: none;';
  return ingrItem;
}

const markUpAll = ingredients.map(createIngridient);
ingredientsList.append(...markUpAll);
