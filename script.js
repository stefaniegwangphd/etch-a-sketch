const gridBox=document.querySelector('#gridBox');
const grid=document.querySelector('.box');
let gridSize=prompt("choose the grid size");

grid.setAttribute("style", `grid-template-columns: repeat(${gridSize},2fr)`)
// grid.setAttribute("style", `grid-template-rows: repeat(${gridSize},2fr)`)


for (i=0; i<gridSize*gridSize;i++) {
    const cell=document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener("mouseover",function (){
        cell.setAttribute("style", "background-color: pink;")
    });
    gridBox.append(cell);
}

const eraseBtn = document.querySelector('#reset');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());