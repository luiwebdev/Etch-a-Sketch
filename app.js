const gridContainer = document.querySelector(".grid-container");
const column = document.createElement("div");
//   const row = document.createElement("div");

const rowNumber = 2;
const columnNumber = 4;

function createRows(callback) {
    for (let i = 0; i < rowNumber; i++) {
        const row = document.createElement("div"); // create a row
        row.classList.add("row");
        gridContainer.appendChild(row);
        callback(row);
    }
}

function createColumns(row) {
    for (let j = 0; j < columnNumber; j++) {
        const square = document.createElement("div"); // create a square
        square.classList.add("square");
        row.appendChild(square);

        square.addEventListener("mouseenter", (e) => {
            console.log(e);
            e.target.style.backgroundColor = "blue"
        })
    }
}

function createGrid() {
    createRows(createColumns);

}

createGrid();
