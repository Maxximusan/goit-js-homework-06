const plusOneEl = document.querySelector('button[data-action = "decrement"]');
const valueEl = document.querySelector('#value');
const minusOneEl = document.querySelector('button[data-action = "increment"]');

let counterValue = 0;

plusOneEl.addEventListener('click', onbtnDecrementEl);
minusOneEl.addEventListener('click', onbtnIncrementEl);


function onbtnDecrementEl() {
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
}

function onbtnIncrementEl() {
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
}
