// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');
let tiles;
const mainHeader = document.querySelector('.main-header');
const instructions = document.querySelector('.instructions');
const userGridGenerator = document.querySelector('.user-grid-generator');


// GENERATING INITAL GRID
let gridSize = 16;
let tileWidth = `${60/gridSize}rem`;
let tileHeight = `${60/gridSize}rem`;

btnNewGrid.addEventListener('click', function(){

    for (let i=1; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    div.style.width = tileWidth;
    div.style.height = tileHeight;
    gridContainer.appendChild(div);
    };

    instructions.textContent = "More tiles on your mind? Type your number below.";
    gridContainer.classList.remove('hidden');
    btnNewGrid.classList.add('hidden');
    userGridGenerator.classList.remove('hidden');

    tiles = document.querySelectorAll('.tile');

    startDrawing();

},{once: true});


// GRID MOUSE EVENTS

function startDrawing() {
    tiles.forEach((tile)=>{
        tile.addEventListener('click', draw.bind(this));
    });
};

function draw(){
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover',()=>{
            tile.style.backgroundColor = 'black';
        });
    });

    tiles.forEach((tile) => {
        tile.addEventListener('mouseout',()=>{
            tile.style.backgroundColor = 'grey';
        });
    });
};




