const container = document.getElementById("container");

const pixel = document.createElement('div');
pixel.classList.add('pixel');

let width = 16;

container.style.gridTemplateColumns = width;
container.style.gridTemplateRows = width;

function addPixels (rows){
    for (let i=0; i < (rows*rows); i++) {
        console.log("appended");
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}

addPixels (width);