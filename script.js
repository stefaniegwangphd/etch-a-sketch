const gridBox=document.querySelector('#gridBox');
const grid=document.querySelector('.box');
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderOutput");
const resize = document.getElementById("resize");
output.innerHTML = slider.value;

let gridSize=output.innerHTML;
grid.setAttribute("style", `grid-template-columns: repeat(${gridSize},2fr)`);

for (i=0; i<gridSize*gridSize;i++) {
    const cell=document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor = 'pink';
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
        cell.addEventListener("mouseover",function(event){
            event.target.style.backgroundColor = 'pink';
        });
        gridBox.append(cell);
    }
}

slider.addEventListener('input', changeGridSize, false);

const defaultBtn = document.querySelector('#default');
defaultBtn.addEventListener("click", function(){
    gridSize=slider.value;
    let cell=grid.children;
    for (i=0; i<gridSize*gridSize; i++) {
        cell[i].addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = 'pink';
        });
    }
});

function getRandomColor() {
    let randomColor='#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener("click", function(){
    gridSize=slider.value;
    let cell=grid.children;
    for (i=0; i<gridSize*gridSize; i++) {
        cell[i].addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = getRandomColor();
        });
    }
});

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener("click", function(){
    gridSize=slider.value;
    let cell=grid.children;
    for (i=0; i<gridSize*gridSize; i++) {
        cell[i].addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = 'white';
        });
    }
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',() => location.reload());