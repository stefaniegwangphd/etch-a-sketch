const gridBox=document.querySelector('#gridBox');
let columns=16;
let rows=16;

for (i=0; i<columns; i++) {
    const row=document.createElement('div');
    row.classList.add('box-row');
    for (j=0; j<rows;j++) {
        const col=document.createElement('div');
        col.classList.add('box-col');
        col.textContent=`(${i},${j})`;
        row.appendChild(col);
    }
    gridBox.appendChild(row);
}