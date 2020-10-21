const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsEl = document.createElement('li');

const listIngredients = ingredients.map((ingredient) => {
  const ingredientsEL = document.createElement('li');
  ingredientsEL.textContent = ingredient;
  return ingredientsEL
}
);
console.log(listIngredients);

const listProducts = document.querySelector('#ingredients');

listProducts.append(...listIngredients);