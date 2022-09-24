const control = document.querySelector('.control');
const inputText = document.querySelector('#inputText');
const btn = document.getElementById('submit');
const para = document.createElement('p');
const gridContainer = document.querySelector('.grid-container');
const color = document.getElementById('colors');
const dropper = document.getElementById('dropper');


let num = 0;
let penColor = 'black';
btn.onclick = () => {
    let count = 0;
    let num = Number(inputText.value);
    para.textContent = num;
    // control.append(para);
    for (let i = 1; i <= (num * num); i++) {
        // console.log(item);
        gridContainer.innerHTML += `<div id='item-${i}' class='item'></div>`;
        count++;
        // gridContainer.
    }
    
    let num1 = num;
    // num1 /= 2;
    let str = 'auto';
    while (num1 > 1) {
        str += ' auto';
        num1--;
    } 
    console.log(str);
    gridContainer.style.gridTemplateColumns = str;
}

gridContainer.addEventListener('mouseover', (e) => {
    let tId = e.target.id;
    console.log(tId);
    const item = document.querySelector(`#${tId}`);
    console.log(item);
    item.style.backgroundColor = penColor;
})

color.addEventListener('input', (e) => {
    penColor = color.value;
})

