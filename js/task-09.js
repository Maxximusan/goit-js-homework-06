function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),

  btn: document.querySelector('.change-color'),

  span: document.querySelector('.color')
}


refs.btn.addEventListener('click', onClick);

function onClick(event) {
  // const target = event.currentTarget
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent
  console.log(refs.body)
}