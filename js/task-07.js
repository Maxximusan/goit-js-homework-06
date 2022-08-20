const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

console.log(refs)

refs.input.addEventListener('input', onBlur);

function onBlur(event) {
    refs.span.style.fontSize = event.currentTarget.value + 'px';
}