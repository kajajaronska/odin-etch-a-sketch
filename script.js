/////////////////////////////////
// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');
let tiles;
const mainHeader = document.querySelector('.main-header');
const instructions = document.querySelector('.instructions');
const userGridGenerator = document.querySelector('.user-grid-generator');
const intro = document.querySelector('.intro');
const btnUserGrid = document.querySelector('.btn-user-grid');
const btnResetGrid = document.querySelector('.btn-reset-grid');
const btnCloseModal = document.querySelector('.close-button');
const userTileNumber = document.querySelector('.user-tile-input');
const modal = document.querySelector('.modal');
const paragraph1 = document.querySelector('.user-grid-paragraph');
const paragraph2 = document.querySelector('.user-grid-paragraph-2');
let drawingMode = false;

/////////////////////////////////
// GENERATING INITAL GRID
let gridSize = 16;
let tileWidth = `${60/gridSize}rem`;
let tileHeight = `${60/gridSize}rem`;


btnNewGrid.addEventListener('click', function(){
    createGrid();

    tiles = document.querySelectorAll('.tile');

    intro.classList.add('hidden');
    instructions.classList.remove('hidden');
    
    gridContainer.classList.remove('hidden');
    btnNewGrid.classList.add('hidden');
    btnResetGrid.classList.remove('hidden');
});

function createGrid() {
    tileWidth = `${60/gridSize}rem`;
    tileHeight = `${60/gridSize}rem`;

    for (let i=1; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    div.style.width = tileWidth;
    div.style.height = tileHeight;
    gridContainer.appendChild(div);
    };

    tiles = document.querySelectorAll('.tile');
};

/////////////////////////////////
// GRID GENERATED BY THE USER 

btnResetGrid.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

btnCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden');
});

function removeCurrentGrid() {
    tiles.forEach((tile)=>tile.remove());
}

btnUserGrid.addEventListener('click',function(){
    if(parseInt(userTileNumber.value)<=100) {
        gridSize = parseInt(userTileNumber.value);
        removeCurrentGrid();
        createGrid();
        modal.classList.add('hidden');

        paragraph1.textContent = `More tiles on your mind?`
        paragraph2.textContent = `Type your number below.`;
    } else {
        console.log('crazy!!!')
        paragraph1.textContent = `Whoa whoa whoa! ${userTileNumber.value} tiles?`
        paragraph2.textContent = `Less than a 100 please 👌🏼`;
    };
});

/////////////////////////////////
// GRID MOUSE EVENTS

gridContainer.addEventListener('click', function(){
    activateDrawing();

    if(!drawingMode) drawingMode = true;
    else if(drawingMode) drawingMode = false;
});

function activateDrawing() {
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', function(){
            if(drawingMode) tile.style.backgroundColor = "grey";
            else if(!drawingMode) return;
        });
    });

    return;
};









