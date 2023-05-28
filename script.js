const body = document.querySelector('body');
const cellContainer = document.createElement('div');
const cells = [];

cellContainer.style.cssText = "display: flex; flex-wrap: wrap; width: 128px; height: 128px; border: 3px solid black;";

let numberOfCells = 16; //to be changeble
let cellSize = 32;
for(let i = 0; i < numberOfCells; i++) {
    cells[i] = document.createElement('div');
    cells[i].style.cssText = `border: 1px solid black; width: ${cellSize}px; height: ${cellSize}px; box-sizing: border-box;`; 
    cellContainer.appendChild(cells[i]);
}

body.appendChild(cellContainer);



