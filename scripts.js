let gridRows = document.createElement('div');
const container = document.getElementById("container");
let pixel = document.createElement('div')

let width = 10;
let containerWidth = 500
let pixelSize = makePixelsSquare(containerWidth,width)
let drawColor = "#646665";
let boardColor = "rgb(187,187,198)";

function makePixelsSquare (containerWidth, width) {
    let pixelSize = (containerWidth/width) + 'px';
    return pixelSize;
}

function addRows (rows,drawColor,boardColor){
    for (let i=0; i < (rows*rows); i++) {
        let board = document.getElementById('container');
        board.style.backgroundColor = boardColor;
        let gridRows = document.createElement('div')
        gridRows.classList.add('gridRows');
        ids = 'pixel' + i;
        gridRows.setAttribute('id', (ids));
        container.appendChild(gridRows);
        gridRows.style.width = makePixelsSquare(containerWidth,rows);
        gridRows.addEventListener('mouseenter', () => {
        gridRows.style.backgroundColor = drawColor;
        });
    }
    }

let sliderWidth = document.getElementById('pixelSide')
let output = document.getElementById('demo')
output.textContent = sliderWidth.value;
sliderWidth.oninput = function() {
    clearBoard();
    output.textContent = this.value;
    width = this.value;
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor)
}

makePixelsSquare(containerWidth,width);
addRows(width,drawColor,boardColor);



function clearBoard () {
    for (let i = 0; i < (width*width); i++) {
        ids = 'pixel' + i;
        toRemove = document.getElementById(ids);
        container.removeChild(toRemove);
    }
}
let classicButton = document.querySelector('.classic');
classicButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#646665";
    let boardColor = "rgb(187,187,198)";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

let blackAndWhiteButton = document.querySelector('.blackAndWhite');
blackAndWhiteButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#000000";
    let boardColor = "#eeeeee";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

let WhiteAndBlackButton = document.querySelector('.whiteAndBlack');
WhiteAndBlackButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#eeeeee";
    let boardColor = "#000000";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);

});

let eaglesButton = document.querySelector('.eagles');
eaglesButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#A5ACAF";
    let boardColor = "#004C54";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);

});

let philsButton = document.querySelector('.phils');
philsButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#E81828";
    let boardColor = "#002D72";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);

});

let flyersButton = document.querySelector('.flyers');
flyersButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#000000";
    let boardColor = "#F74902";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);

});

let unionButton = document.querySelector('.union');
unionButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#b19b69";
    let boardColor = "#071b2c";
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

let resetButton = document.querySelector('.reset');
resetButton.addEventListener("click", () => {
    clearBoard()
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});