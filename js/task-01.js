const listEl = document.querySelector('#categories');
// console.log(listEl);
// debugger
// console.log('Number of categories:', listEl.childNodes.length)
console.log('Number of categories:', listEl.children.length)


const itemEl = document.querySelectorAll('.item');
itemEl.forEach(function (item) {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length)
});
// const itemEl = document.querySelector('.item');
// console.log('Category:', itemEl.firstElementChild.textContent);

// const siblingEl = itemEl.firstElementChild.nextElementSibling;
// console.log('Elements:', siblingEl.children.length);


