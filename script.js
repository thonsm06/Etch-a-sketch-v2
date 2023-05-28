const body = document.querySelector('body');
const cellContainer = document.createElement('div');
const cells = [];

cellContainer.style.cssText = "display: flex; flex-wrap: wrap; width: 512px; height: 512px; border: 3px solid black;";

let numberOfCells = 16; //to be changeble
let cellSize = 512 / numberOfCells;
for(let i = 0; i < numberOfCells; i++) {
    cells[i] = [];
    for(let j = 0; j < numberOfCells; j++) {
        cells[i][j] = document.createElement('div');
        cells[i][j].style.cssText = `border: 1px solid black; width: ${cellSize}px; height: ${cellSize}px; box-sizing: border-box;`;
        cells[i][j].addEventListener('mouseover', mouse => {
            mouse.target.style.backgroundColor = 'grey';
        })
        cells[i][j].addEventListener('mouseout', mouse => {
            mouse.target.style.backgroundColor = 'white';
        })
        cellContainer.appendChild(cells[i][j]);
    }
}

body.appendChild(cellContainer);
