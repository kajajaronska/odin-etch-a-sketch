// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');

// GENERATING INITAL GRID

const gridSize = 16;

btnNewGrid.addEventListener('click', function(){

    for (let i=1; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    gridContainer.appendChild(div);
    };

    draw();

},{once: true});


// GRID MOUSE EVENTS

function draw(){
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile) => {
        tile.addEventListener('mouseover',()=>{
            tile.style.backgroundColor = 'black';
            console.log('You touched a tile!!');
        });
    });

    tiles.forEach((tile) => {
        tile.addEventListener('mouseout',()=>{
            tile.style.backgroundColor = 'grey';
            console.log('You touched a tile!!');
        });
    });
};




