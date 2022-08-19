const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ulEl = document.querySelector('ul');
// // console.log(ulEl)

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ing = ingredients[i];

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ing;
//   elements.push(itemEl)
// }
// ulEl.append(...elements);
// console.log(ulEl)

const ulEl = document.querySelector('#ingredients');

const elem = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});

console.log(ulEl)
console.log(elem)

ulEl.append(...elem);
