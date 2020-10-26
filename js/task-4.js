const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let currentValue = 0;
const increment = () => {
  return (Number(counterValue.textContent) = currentValue += 1);
};
const decrement = () => {
  return (Number(counterValue.textContent) = currentValue -= 1);
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);