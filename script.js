const gridBox=document.querySelector('#gridBox');
let gridSize=16;

for (i=0; i<gridSize*gridSize;i++) {
    const cell=document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener("mouseover",function (){
        cell.setAttribute("style", "background-color: pink;")
    });
    gridBox.append(cell);
}

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());