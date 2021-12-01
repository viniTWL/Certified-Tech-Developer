window.onload = alert('A página foi carregada')

let formulario = document.createElement('form');
let paragraph = document.createElement('p');

document.body.appendChild(formulario);

let inputbar = document.createElement('input');
inputbar.placeholder = 'Nome';

let btnSub = document.createElement('button');

let btnReset = document.createElement('button');
btnReset.setAttribute('type', 'reset');
btnReset.innerText = 'Reset';


btnSub.setAttribute('type', 'submit');
btnSub.innerText = 'Submit'
btnSub.addEventListener('click', (load) => {
    load.preventDefault();
}); 
btnSub.ondblclick = function(){
    paragraph.innerText = inputbar.value;
    formulario.appendChild(paragraph);
}

formulario.appendChild(inputbar);
formulario.appendChild(btnSub);
formulario.appendChild(btnReset);

let txt = document.createElement('p')
txt.innerText = 'Passe o mouse para ver a mudança de cores';

txt.onmouseover = function(){
    txt.style.color = 'red'
    txt.innerText = 'Mouse passou'
    console.log('Mouse passou')
}

txt.onmouseout = function(){
    txt.style.color = 'blue'
    txt.innerText = 'Mouse saiu'
    console.log('Mouse saiu')
}

document.body.appendChild(txt);

