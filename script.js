const control = document.querySelector(".control");
const inputText = document.querySelector("#inputText");
const btn = document.getElementById("submit");
const para = document.createElement("p");
const gridContainer = document.querySelector(".grid-container");
const color = document.getElementById("colors");

let num = 0;
let penColor = "black";
btn.onclick = () => {
  let count = 0;
  let num = Number(inputText.value);
  para.textContent = num;

  for (let i = 1; i <= num * num; i++) {
    gridContainer.innerHTML += `<div id='item-${i}' class='item'></div>`;
    count++;
  }

  let num1 = num;

  let str = "auto";
  while (num1 > 1) {
    str += " auto";
    num1--;
  }
  gridContainer.style.gridTemplateColumns = str;
};

function drawArea(execution) {
  if (execution == 1) {
    gridContainer.addEventListener("mouseover", (e) => {
      let tId = e.target.id;

      const item = document.querySelector(`#${tId}`);

      item.style.backgroundColor = penColor;
      colorReturn = item;
    });
  } else stop();
}

color.addEventListener("input", (e) => {
  penColor = color.value;
  drawArea(1);
});
