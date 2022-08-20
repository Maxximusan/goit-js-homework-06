const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     if (event.currentTarget.value.length <= 6) {
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     }
//     else {
//         this.classList.remove('valid');
//         this.classList.add('invalid');
//     }
//     console.log('input lost focus - event blur')
//     console.log(event.currentTarget)
// }

function onInputBlur(event) {
    event.currentTarget.value.length <= inputEl.dataset.length ? this.classList.add('valid') : this.classList.add('invalid')
    console.log(event.currentTarget)
};
