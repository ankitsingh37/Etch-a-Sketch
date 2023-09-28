
let inputs = document.querySelectorAll('.square');
let colors = document.querySelector('#color');
let grids = document.querySelector('#grid');

let color = '#ffc600';
let gridNum = 16;
function handleUpdate() {
    this.style.backgroundColor = color;
}
function colorUpdate() {
    color = this.value;
}
function gridUpdate() {
    gridNum = Number(this.value);
}


function createGrid() {
    let toClear = document.getElementById("contents");
    toClear.innerHTML = "";

    for (let rows = 0; rows < gridNum; rows++) {
        let container = document.getElementById("contents");
        let newDiv = document.createElement('div');
        let str = "a" + String(rows);
        newDiv.classList.add('rows');
        newDiv.setAttribute('id', str);
        container.appendChild(newDiv);
    };

    for (let i = 0; i < gridNum; i++) {
        let str = "a" + String(i);
        let newData = document.getElementById(str);
        for (let j = 0; j < gridNum; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('square');
            newData.appendChild(newDiv);
        }
    }
    inputs = document.querySelectorAll('.square');
    colors = document.querySelector('#color');
    grids = document.querySelector('#grid');
    inputs.forEach(input => input.addEventListener('click', handleUpdate));
    inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));
    colors.addEventListener('change', colorUpdate);
    grids.addEventListener('change', gridUpdate);
    grids.addEventListener('change', createGrid);
}





inputs.forEach(input => input.addEventListener('click', handleUpdate));
inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));
colors.addEventListener('change', colorUpdate);
grids.addEventListener('change', gridUpdate);
grids.addEventListener('change', createGrid);
