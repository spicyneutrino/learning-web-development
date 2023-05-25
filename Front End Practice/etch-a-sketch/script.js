let setSizeBtn = document.querySelector('.set-size button');
let gridSize = 16;
let selectedColor = "#8ecae6";

let sketchArea = document.querySelector('.main-container');

createDiv(gridSize);

setSizeBtn.addEventListener('click', () => {
    console.log(gridSize);
    let tempGridSize = +document.getElementById('grid-size').value;
    if ((tempGridSize >= 1 && tempGridSize <= 100)) {
        gridSize = tempGridSize;
    }
    clearScreen();
    createDiv(gridSize);
})

let colorList = document.querySelectorAll('label > input');

colorList.forEach((color) => {
    color.addEventListener('click', () => {
        selectedColor = color.value;
    })
})
// randomColorOption = colorList[colorList.length-1];
// randomColorOption.addEventListener('click',()=>{
//     selectedColor= getRandomColor();
// });

function createDiv(num) {
    let rowContainer, block;
    // each row of the grid is a container for smaller blocks
    for (let i = 0; i < num; i++) {
        rowContainer = document.createElement('div');
        rowContainer.style.height = `${(100 / gridSize)}%`;
        rowContainer.style.width = '100%';
        rowContainer.setAttribute("class", "each-div-line")
        for (let j = 0; j < num; j++) {
            block = document.createElement("div");
            block.style.width = `${100 / gridSize}%`;
            block.setAttribute("class", "box")
            block.style.transition = "background-color 0.5s";
            rowContainer.appendChild(block);
        }
        sketchArea.appendChild(rowContainer);
    }
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            if (selectedColor==='random'){
                box.style.backgroundColor = `${getRandomColor()}`;
            }
            box.style.backgroundColor = `${selectedColor}`;
        })
    })
}

function clearScreen() {
    sketchArea.innerHTML = "";
}

function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

console.log(getRandomColor());

let resetBtn = document.querySelector('.color-reset');
resetBtn.addEventListener('click',()=>{
    clearScreen();
    createDiv(gridSize);
})

let eraseBtn = document.querySelector('.erase-color');
eraseBtn.addEventListener('mouseenter',()=>{
    selectedColor= '#023047';
})