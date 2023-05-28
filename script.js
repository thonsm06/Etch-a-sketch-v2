const body = document.querySelector('body');
const button = document.createElement('button');
const cellContainer = document.createElement('div');
let cells = [];
const totalGridWidth = 960;
let numberOfCells = 2; //to be changeble
let resetGrid = 1;

cellContainer.style.cssText = `display: flex; flex-wrap: wrap; width: ${totalGridWidth}px; height: ${totalGridWidth}px; border: 3px solid black;`;

button.textContent = 'Change number of cell';


button.addEventListener('click', mouse => {
    const newCellNumber = Number(prompt("Input a number up to 100"));
    if (newCellNumber !== null && newCellNumber <= 100) {
        for(let i = 0; i < numberOfCells; i++) {
            for(let j = 0; j < numberOfCells; j++) {
                cells[i][j].remove();
            }
        }
        cells = [];
        numberOfCells = newCellNumber;
        newGrid(numberOfCells);
    }
})


function newGrid(num) {
    let cellSize = totalGridWidth / numberOfCells;
    for(let i = 0; i < num; i++) {
        cells[i] = [];
        for(let j = 0; j < num; j++) {
            cells[i][j] = document.createElement('div');
            cells[i][j].classList.toggle('cell');
            cells[i][j].style.cssText = `border: 1px solid lightgrey; width: ${cellSize}px; height: ${cellSize}px; box-sizing: border-box; flex: 1 1 auto;`;
            cells[i][j].addEventListener('mouseover', mouse => {
                mouse.target.style.backgroundColor = 'grey';
            })
            cells[i][j].addEventListener('mouseout', mouse => {
                mouse.target.style.backgroundColor = 'white';
            })
            cellContainer.appendChild(cells[i][j]);
        }
    }
}

body.appendChild(button);
body.appendChild(cellContainer);


if (resetGrid === 1) {
    newGrid(numberOfCells);
    startUp = 0;
}


