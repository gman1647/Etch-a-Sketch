let gridRows = document.createElement('div');
const container = document.getElementById("container");
let pixel = document.createElement('div')

let width = 16;

function addRows (rows){
    for (let i=0; i < (rows*rows); i++) {
        console.log("appended row");
        let gridRows = document.createElement('div')
        gridRows.classList.add('gridRows');
        gridRows.setAttribute('id', i);
        container.appendChild(gridRows);
    }
    }

function addPixels (rows){
    for (let i=0; i < (rows); i++) {
        console.log("appended pixel");
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        column = document.getElementById(i);
        column.appendChild(pixel);
    }
}

addRows(width)

