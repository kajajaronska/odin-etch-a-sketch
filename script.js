// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');

// GENERATING A GRID

const gridSize = 16;

btnNewGrid.addEventListener('click', function(){

    for (let i=1; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    gridContainer.appendChild(div);

    }
},{once: true});


