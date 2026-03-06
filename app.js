const gridContainer = document.querySelector(".grid-container");
const column = document.createElement("div");
// const row = document.createElement("div");

const ROWNUMBER = 3;
const COLUMNNUMBER = 5;

function createGrid() {
    for (let i = 0; i < ROWNUMBER; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for (let j = 0; j < COLUMNNUMBER; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

createGrid();
