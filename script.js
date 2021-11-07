// SELECTING QUERIES
const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.container');

// GENERATING A GRID

const gridSize = 16;

btnNewGrid.addEventListener('click', function(){

    for (let i=0; i <= (gridSize*gridSize); i++) {
        const div = document.createElement('div');
    div.className = 'tile';
    div.textContent = i;
    gridContainer.appendChild(div);

    }
});


