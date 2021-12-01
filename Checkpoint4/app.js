/*
// Creating page title

let title = document.createElement('h1');
title.innerText = 'Lista de Coisas a fazer';
document.body.appendChild(title);

// Creating a input and a button that receives a task and confirms it

let formulario = document.createElement('form')
document.body.appendChild(formulario)

let inputTask = document.createElement('input');
inputTask.id = 'task';
inputTask.type = 'text';
inputTask.placeholder = 'Nova Tarefa'
let buttonTask = document.createElement('button');
buttonTask.setAttribute('type', 'button');
buttonTask.setAttribute('onclick', 'createTask()');
buttonTask.id = 'buttonTask';

let plusIcon = document.createElement('i')
plusIcon.setAttribute('class', 'fas fa-plus')

let trashIcon = document.createElement('i')
trashIcon.setAttribute('class', 'fas fa-trash')

buttonTask.appendChild(plusIcon);
formulario.appendChild(inputTask);
formulario.appendChild(buttonTask);


// Creating div List of things to do

let divList = document.createElement('div');
divList.className = 'list'
document.body.appendChild(divList);

// Creating sucessuful message

let message = document.createElement('p');
message.id = 'msg';
document.body.appendChild(message);

// Creating a function that creates a new task

let divTask = document.createElement('div');


function createTask(){
    let input = document.getElementById('task');
    let text = '';
    if(input.value == ''){ 
        alert('Digite uma tarefa')   ;
    }
    else{ 
        alert('Tarefa adicionada a Lista');
    
    let divTask = document.createElement('div');
    divTask.className = 'divTask'
    divList.appendChild(divTask);

    let check = document.createElement('input');
    check.type = 'checkbox';
    check.id = input.value;
    check.name = input.value;

    let label = document.createElement('label');
    label.setAttribute('for', input.value);
    label.innerText = input.value;
    label.id = input.value;
    
    divTask.appendChild(check);
    divTask.appendChild(label);
    
    
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.id = input.value;
    deleteButton.setAttribute('onclick', 'divList.removeChild(idDiv)');
    deleteButton.appendChild(trashIcon)

    divTask.appendChild(label);
    divTask.appendChild(check);
    divTask.appendChild(deleteButton);
    }

    document.getElementById('msg').innerText = text;
}
*/

let title = document.querySelector('#nome-imagem')
let desc = document.querySelector('#descricao')
let image = document.querySelector('#url')

btn = document.querySelector('#btnSubmit')

let cardGrid = document.querySelector('#card-grid');

let card = document.createElement('div');

let cardTitle = document.createElement('h2');

let divImg = document.createElement('div');

let img = document.createElement('img');

let cardParagraph = document.createElement('p');

card.setAttribute('class', 'card');

 btn.addEventListener('click', (load) => {
    let title = document.querySelector('#nome-imagem')
    let desc = document.querySelector('#descricao')
    let image = document.querySelector('#url')
    
    btn = document.querySelector('#btnSubmit')
    
    let cardGrid = document.querySelector('#card-grid');
    
    let card = document.createElement('div');
    
    let cardTitle = document.createElement('h2');
    
    let divImg = document.createElement('div');
    
    let img = document.createElement('img');
    
    let cardParagraph = document.createElement('p');
    
    card.setAttribute('class', 'card');
    
    cardGrid.appendChild(card);
    cardTitle.innerText = title.value;
    divImg.appendChild(img);
    img.setAttribute('src',image.value)
    cardParagraph.innerText = desc.value;
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardParagraph);
    load.preventDefault();
}); 
