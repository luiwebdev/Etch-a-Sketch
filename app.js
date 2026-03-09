const gridContainer = document.querySelector(".grid-container");

const editButton = document.querySelector(".edit-button");
let rowInput = 16;
let columnInput = 16;
let opacity = 0;

editButton.addEventListener("click", () => {
    clearGrid();

    do {
        rowInput = Number(prompt("Enter row grid"));
        columnInput = Number(prompt("Enter column grid"));
    } while ((rowInput > 20 || rowInput < 0) || (columnInput > 20 || columnInput < 0));

    createRow(createColumn);
})

function createRow(callback) {
    for (let i = 0; i < rowInput; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        callback(row);
    }
}

function createColumn(row) {
    for (let i = 0; i < columnInput; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);

        column.addEventListener("mouseenter", (e) => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            column.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            console.log(e)
        })
    }
}

createRow(createColumn);

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}





