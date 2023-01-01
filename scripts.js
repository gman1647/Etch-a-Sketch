let gridRows = document.createElement('div');
const container = document.getElementById("container");
let pixel = document.createElement('div')

let width = 10;
let pixelSize = (500/width) + "px";
console.log(pixelSize)

function addRows (rows){
    for (let i=0; i < (rows*rows); i++) {
        let gridRows = document.createElement('div')
        gridRows.classList.add('gridRows');
        ids = 'pixel' + i;
        gridRows.setAttribute('id', (ids));
        container.appendChild(gridRows);
        gridRows.style.width = pixelSize;
        gridRows.addEventListener('mouseenter', () => {
        gridRows.style.backgroundColor = "#646665";
        });
    }
    }

//addRows(width)
/*
function colorPixels (rows) {
    for (let i=0; i < (rows*rows); i++) {
        ids = 'pixel' + i;
        pixelSketched = document.getElementById(ids);pixelSketched.addEventListener

}};
*/
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
    pixelSize = (500/width) + "px";
    addRows(width)
}

addRows(width)
