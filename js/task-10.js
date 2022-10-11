function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  create: document.querySelector("button[data-create]"),
  delete: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

refs.create.addEventListener("click", () => createBoxes(refs.input.value));
refs.delete.addEventListener("click", destroyBoxes);
// refs.input.addEventListener("input", onImput);

// function onImput(event) {
//   console.log(refs.input.value);
//   console.log(event.currentTarget.value);
//   refs.input.value = event.currentTarget.value;
//   console.log(refs.input.value);
//   console.log(event.currentTarget.value);
// }

function createBoxes(amount) {
  console.log(amount);

  let freeMassive = [];
  let divSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.classList.add("soto");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${divSize}px`;
    box.style.height = `${divSize}px`;

    divSize += 10;
    freeMassive.push(box);
  }
  refs.boxes.append(...freeMassive);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
