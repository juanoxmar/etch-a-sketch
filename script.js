const container = document.createElement('div');
const row = document.createElement('div');
const row1 = document.createElement('div');
const box = document.createElement('div');
const but = document.createElement('button');
container.classList.add('container');
row.classList.add('row');
row1.classList.add('row1');
box.classList.add('box');
but.classList.add('but');
but.innerHTML = 'Reset Board';

let num = 0;

do {
    num = prompt('Enter the square grid size (200 max):');
    console.log(num);
} while( num > 0 && num > 200 )


for(let i = 0; i<num; i++){
    row.appendChild(box.cloneNode(true));
};
for(let j = 0; j<num; j++){
    container.appendChild(row.cloneNode(true));
};

row1.prepend(but.cloneNode(true));
container.prepend(row1.cloneNode(true));
document.body.appendChild(container);



const hover = document.getElementsByClassName('box');

for(let k = 0; k < hover.length; k++){
    hover[k].addEventListener('mouseover', function(e){
        e.target.style.background = 'black';
    });
};

const resetButton = document.getElementsByClassName('but');
resetButton[0].addEventListener('click', function(e){
    for(let k = 0; k < hover.length; k++){
        hover[k].removeAttribute('style');
    }
});

