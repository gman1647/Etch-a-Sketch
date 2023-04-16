//Variables
let gridRows = document.createElement('div');
let pixel = document.createElement('div')
let width = 10;
const containerWidth = 520;
let pixelSize = makePixelsSquare(containerWidth,width)
let drawColor = "#646665";
let boardColor = "rgb(187,187,198)";
const container = document.getElementById("container");
let styles = window.getComputedStyle(document.body);

//creates the initial board
makePixelsSquare(containerWidth,width);
addRows(width,drawColor,boardColor);

//creates pixel width based on the width of the board and the number of pixels per row
function makePixelsSquare (containerWidth, width) {
    let pixelSize = (containerWidth/width) + 'px';
    return pixelSize;
}

//generates the drawing board
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

//clears the board so that a new board can be generated
function clearBoard () {
    for (let i = 0; i < (width*width); i++) {
        ids = 'pixel' + i;
        toRemove = document.getElementById(ids);
        container.removeChild(toRemove);
    }
}

//sets board to 'classic' etch-a-sketch colors
let classicButton = document.querySelector('.classic');
classicButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = styles.getPropertyValue('--classic-text');
    let boardColor = styles.getPropertyValue('--classic-bg');
    root = document.documentElement;
    root.className = 'classic';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//sets board to a white background with a black draw color
let blackAndWhiteButton = document.querySelector('.blackAndWhite');
blackAndWhiteButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "black";
    let boardColor = "white";
    root = document.documentElement;
    root.className = 'blackAndWhite';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//sets board to a black background with a white draw color
let WhiteAndBlackButton = document.querySelector('.whiteAndBlack');
WhiteAndBlackButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#eeeeee";
    let boardColor = "#000000";
    root = document.documentElement;
    root.className = 'whiteAndBlack';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);

});

//sets board to a midnight green background with a silver draw color
let eaglesButton = document.querySelector('.eagles');
eaglesButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = styles.getPropertyValue('--eagles-text');
    let boardColor = styles.getPropertyValue('--eagles-bg');
    root = document.documentElement;
    root.className = 'eagles';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//sets board to a blue background with a red draw color
let philsButton = document.querySelector('.phils');
philsButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = styles.getPropertyValue('--phillies-text');
    let boardColor = styles.getPropertyValue('--phillies-bg');
    root = document.documentElement;
    root.className = 'phils';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//sets board to a orange background with a black draw color
let flyersButton = document.querySelector('.flyers');
flyersButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = "#000000";
    let boardColor = styles.getPropertyValue('--flyers-bg');
    root = document.documentElement;
    root.className = 'flyers';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//sets board to a navy background with a gold draw color
let unionButton = document.querySelector('.union');
unionButton.addEventListener("click", () => {
    clearBoard()
    let drawColor = styles.getPropertyValue('--union-text');
    let boardColor = styles.getPropertyValue('--union-bg');
    root = document.documentElement;
    root.className = 'union';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//generates a random color for use in the rainbow and random buttons
function randomColor () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let drawColor = "#" + randomColor;
    return drawColor;
}

//sets board to a random background color with a random draw color
let randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    clearBoard()
    root = document.documentElement;
    root.className = 'classic';
    let drawColor = randomColor();
    let boardColor = randomColor();
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
  });

//draws the random button in a random color each time the page is refreshed
randomButton = document.getElementById('random')
randomButton.style.backgroundColor = randomColor()
randomButton.style.color = 'black';

//sets board to a black background with each pixel being drawn in a random color
let rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => {
    clearBoard()
    let boardColor = "#000000";
    root = document.documentElement;
    root.className = 'rainbow';
    makePixelsSquare(containerWidth, width);
    addRowsRainbow(width,boardColor);
  });

//special draw function to allow a new color on each pixel to be used with the rainbow button
function addRowsRainbow (rows,boardColor){
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
        gridRows.style.backgroundColor = randomColor();
        });
    }
    }

//resets board to initial values
let resetButton = document.querySelector('.reset');
resetButton.addEventListener("click", () => {
    clearBoard()
    root = document.documentElement;
    root.className = 'classic';
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor);
});

//changes the number of pixels per side onthe board
let sliderWidth = document.getElementById('pixelSide')
let output = document.getElementById('demo')
output.textContent = sliderWidth.value;
sliderWidth.onmouseup = function() {
    clearBoard();
    output.textContent = this.value;
    width = this.value;
    makePixelsSquare(containerWidth, width);
    addRows(width,drawColor,boardColor)
}

//sets the board to a background color chosen by the player with a draw color chosen by the player
let playerChoiceButton = document.querySelector('#applyUserColors');
playerChoiceButton.addEventListener('click', () => {
    root = document.documentElement;
    root.className = 'classic';
    let playerColorBackground = document.getElementById('colorPickerBackground').value;
    let playerDrawColor = document.getElementById('colorPickerDraw').value;
    clearBoard()
    makePixelsSquare(containerWidth, width);
    addRows(width,playerDrawColor,playerColorBackground);
});