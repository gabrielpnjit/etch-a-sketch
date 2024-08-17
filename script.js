let width = 16;
let height = 16;

const gridContainer = document.querySelector("#grid-container");

function onHover(event) {
    event.target.classList.add("grid-box-filled");
}

function createGridBoxes(size) {
    if (gridContainer.hasChildNodes()) {
        gridContainer.innerHTML = "";
    }

    const boxSize = 600 / size;
    const cssRule = `min-width: ${boxSize}px; max-width: ${boxSize}px; min-height: ${boxSize}px;}`
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid-box");
            grid.style.minWidth = `${boxSize}px`;
            grid.style.maxWidth = `${boxSize}px`;
            grid.style.minHeight = `${boxSize}px`;

            // round corners of screen
            if (i == 0 && j == 0) {
                grid.style.borderTopLeftRadius = "16px";
            }
            else if (i == 0 && j == size - 1) {
                grid.style.borderTopRightRadius = "16px";
            }
            else if (i == size - 1 && j == 0) {
                grid.style.borderBottomLeftRadius = "16px";
            }
            else if (i == size - 1 && j == size - 1) {
                grid.style.borderBottomRightRadius = "16px";
            }

            grid.addEventListener("mouseover", onHover);
            gridContainer.appendChild(grid);
        }
    }
}

const densityButtons = document.querySelector(".density-buttons")

densityButtons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case 'low-dense-button':
            createGridBoxes(20)
            break;
        case 'med-dense-button':
            createGridBoxes(40)
            break;
        case 'high-dense-button':
            createGridBoxes(80)
            break;
    }
})

const clearButton = document.querySelector("#clear");
// TODO: implement clearing
clearButton.addEventListener("click", () => {
    gridContainer.childNodes.forEach((child) => {
        if (child.classList.contains('grid-box-filled')) {
            child.classList.remove('grid-box-filled');
        }
    })
})

gridContainer.addEventListener("dragstart", (e) => {
    console.log("yes");
    e.preventDefault();
})

// initialize grid
createGridBoxes(40)