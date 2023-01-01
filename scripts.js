let gridRows = document.createElement('div');
const container = document.getElementById("container");
let pixel = document.createElement('div')

let width = 10;
let containerWidth = 500
let pixelSize = makePixels(containerWidth,width)

function makePixels (containerWidth, width) {
    let pixelSize = (containerWidth/width) + 'px';
    return pixelSize;
}

function addRows (rows){
    for (let i=0; i < (rows*rows); i++) {
        let gridRows = document.createElement('div')
        gridRows.classList.add('gridRows');
        ids = 'pixel' + i;
        gridRows.setAttribute('id', (ids));
        container.appendChild(gridRows);
        gridRows.style.width = makePixels(containerWidth,rows);
        gridRows.addEventListener('mouseenter', () => {
        gridRows.style.backgroundColor = "#646665";
        });
    }
    }

let sliderWidth = document.getElementById('pixelSide')
let output = document.getElementById('demo')
output.textContent = sliderWidth.value;
sliderWidth.oninput = function() {
    for (let i = 0; i < (width*width); i++) {
        ids = 'pixel' + i;
        toRemove = document.getElementById(ids);
        container.removeChild(toRemove);
    }
    output.textContent = this.value;
    width = this.value;
    makePixels(containerWidth, width);
    addRows(width)
}

makePixels(containerWidth,width);
addRows(width);
