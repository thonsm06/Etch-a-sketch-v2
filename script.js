const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
const clearButton = document.createElement('button');
const cellContainer = document.createElement('div');
const totalGridWidth = 960;

let cells = [];
let numberOfCells = 16; //to be changeble
let resetGrid = 1;
let drawing = false;

buttonContainer.classList.toggle('buttons');
clearButton.classList.toggle('button');

cellContainer.style.cssText = `display: flex; flex-wrap: wrap; width: ${totalGridWidth}px; height: ${totalGridWidth}px; border: 3px solid black;`;

button.textContent = 'Change number of cell';
clearButton.textContent = 'Clear board';

button.addEventListener('click', mouse => {
    const newCellNumber = Number(prompt("Input a number up to 100"));
    if (newCellNumber !== null && newCellNumber <= 100) {
        for(let i = 0; i < numberOfCells; i++) {
            for(let j = 0; j < numberOfCells; j++) {
                cells[i][j].remove();
            }
        }
        numberOfCells = newCellNumber;
        newGrid(numberOfCells);
    }
},{once: true})

clearButton.addEventListener('click', mouse => {
    for(let i = 0; i < numberOfCells; i++) {
        for(let j = 0; j < numberOfCells; j++) {
            cells[i][j].style.backgroundColor = 'white';
        }
    }
})

//cellContainer.addEventListener('mousedown', () => drawing = true);
//cellContainer.addEventListener('mouseup', () => drawing = false);
body.addEventListener('mouseup', () => drawing = false);
function newGrid(num) {
    let cellSize = totalGridWidth / numberOfCells;
    for(let i = 0; i < num; i++) {
        cells[i] = [];
        for(let j = 0; j < num; j++) {
            cells[i][j] = document.createElement('div');
            cells[i][j].classList.toggle('cell');
            cells[i][j].style.cssText = `border: 1px solid lightgrey; width: ${cellSize}px; height: ${cellSize}px; box-sizing: border-box; flex: 1 1 auto;`;
            cells[i][j].setAttribute('toggle', 'false');
            cells[i][j].addEventListener('mousedown', mouse => {
                drawing = true;
                cells[i][j].setAttribute('toggle','true');
                mouse.target.style.backgroundColor = 'black';
            })
            cells[i][j].addEventListener('mouseover', mouse => {
                if (drawing === true) {
                    mouse.target.style.backgroundColor = 'black';
                    cells[i][j].setAttribute('toggle', 'true');
                }
                else if (drawing === false && cells[i][j].getAttribute('toggle') === 'false'){
                    mouse.target.style.backgroundColor = 'grey';
                }
            })
            cells[i][j].addEventListener('mouseout', mouse => {
                if (drawing === false && cells[i][j].getAttribute('toggle') === 'false')
                {
                    mouse.target.style.backgroundColor = 'white';
                }
            })
            cellContainer.appendChild(cells[i][j]);
        }
    }
}

buttonContainer.appendChild(button);
buttonContainer.appendChild(clearButton);
body.appendChild(buttonContainer);
body.appendChild(cellContainer);


if (resetGrid === 1) {
    newGrid(numberOfCells);
    startUp = 0;
}


