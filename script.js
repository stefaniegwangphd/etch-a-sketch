const gridBox=document.querySelector('#gridBox');
const grid=document.querySelector('.box');
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderOutput");
const resize = document.getElementById("resize");
output.innerHTML = slider.value;

let gridSize=output.innerHTML;
grid.setAttribute("style", `grid-template-columns: repeat(${gridSize},2fr)`)

for (i=0; i<gridSize*gridSize;i++) {
    const cell=document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener("mouseover",function (){
        cell.setAttribute("style", "background-color: pink;")
    });
    gridBox.append(cell);
}

let changeGridSize= function () {
    output.innerHTML = slider.value;
    gridBox.innerHTML='';
    gridSize=slider.value;
    grid.setAttribute("style", `grid-template-columns: repeat(${gridSize},2fr)`)
    for (i=0; i<gridSize*gridSize;i++) {
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseover",function (){
            cell.setAttribute("style", "background-color: pink;")
        });
        gridBox.append(cell);
    }
}

slider.addEventListener('input', changeGridSize, false);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() => location.reload());

