// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');
const tiles = document.querySelectorAll('.tile');

// GENERATING INITAL GRID

const gridSize = 16;

btnNewGrid.addEventListener('click', function(){

    for (let i=1; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    gridContainer.appendChild(div);
    };

    startDrawing();

},{once: true});


// GRID MOUSE EVENTS

function startDrawing() {
    // const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile)=>{
        tile.addEventListener('click', draw.bind(this));
    });
}

function draw(){
    // const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile) => {
        tile.addEventListener('mouseover',()=>{
            tile.style.backgroundColor = 'black';
            // console.log('You touched a tile!!');
        });
    });

    tiles.forEach((tile) => {
        tile.addEventListener('mouseout',()=>{
            tile.style.backgroundColor = 'grey';
            // console.log('You touched a tile!!');
        });
    });
};




