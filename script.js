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

// initialize grid
createGridBoxes(40)