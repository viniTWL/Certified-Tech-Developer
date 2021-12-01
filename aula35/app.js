let nome = document.querySelector('#name');
let btn = document.querySelector('#btn');
let list = document.createElement('ol')

let url = ` https://reqres.in/api/users/${nome.value}page=2 `

let array = [];

btn.addEventListener('click', (event) => {
    event.preventDefault();
    list.innerText = '';
    fetch(url)
.then( request => request.json())
.then( array => {
    array.forEach((data) => list.innerHTML += `<li>${data.nome}</li>`)
})
.catch( error => console.log(`Foi encontrado esse erro: ${error}`))
})
