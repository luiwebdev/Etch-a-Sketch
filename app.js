const gridContainer = document.querySelector(".grid-container");
const editButton = document.querySelector(".edit-btn");
let rowInput = 3;
let columnInput = 3;
let editButtonClicked = false;

editButton.addEventListener("click", () => {
    editButtonClicked = true;
    rowInput = Number(prompt("Enter row grid"));
    columnInput = Number(prompt("Enter column grid"));
    console.log(typeof(rowInput))

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
        
        column.addEventListener("mouseenter", () => {
            column.style.backgroundColor = "royalblue"
        })
    }
}


// if (editButtonClicked !== true) {
    createRow(createColumn);
// }

