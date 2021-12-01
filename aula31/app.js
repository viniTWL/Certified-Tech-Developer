// let a = document.querySelector('a')

// console.log(a.hasAttribute('href'))

// a.setAttribute('href', 'https://www.google.com/search?q=neymar&sxsrf=AOaemvIoA5CIhHHEb9qbQCM6ETfcdFwKxg%3A1635430239410&source=hp&ei=X696YfGwFrDT1sQP5Y-I2Aw&iflsig=ALs-wAMAAAAAYXq9b3nPN1t98nzCpdNn8Gld4Jat2cY9&ved=0ahUKEwix3OOzpO3zAhWwqZUCHeUHAssQ4dUDCAc&uact=5&oq=neymar&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAgAEIAEELEDMgsILhCABBCxAxCDATIICAAQgAQQsQMyCwgAEIAEELEDEIMBMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQM6BggjECcQEzoRCC4QgAQQsQMQgwEQxwEQ0QM6BAguEEM6DgguEIAEELEDEMcBENEDOgcILhCxAxBDOggIABCxAxCDAToICC4QgAQQsQM6BQguEIAEUPMJWLcOYJIPaABwAHgAgAGXAYgBlwWSAQMwLjWYAQCgAQE&sclient=gws-wiz');

// console.log(a.hasAttribute('href'))

// console.log(a.getAttribute('href'));


// // criar um nó parágrafo

// let p = document.createElement('p')

// p.innerHTML = "<p>lorem ipsum dolor sit amet</p>"

// // adicionando  e removendo o parágrafo

// document.body.appendChild(p);

// document.body.removeChild(p);

// // lista de ordenação

// let ol = document.createElement('ol');

// ol.setAttribute('type', 'a');

// ol.appendChild(document.createElement('li'));

// let item = document.querySelector('li');

// ol.appendChild(document.createElement('li'));
// ol.appendChild(document.createElement('li'));

// document.body.appendChild(ol);

// li.innerText = 'Melhores gols do Neymar'
let form = document.createElement('form')

let titulo = document.createElement('h1')

titulo.innerText = 'LOGIN'

document.body.appendChild(titulo)

document.body.appendChild(form);

let inputEmail = document.createElement('input');
inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('placeholder', 'Email')

form.appendChild(inputEmail);

let inputPassword = document.createElement('input');
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('placeholder', 'Senha')

form.appendChild(inputPassword)

let cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'reset')
cancelButton.innerText = 'Cancelar';

form.appendChild(cancelButton);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit')
submitButton.innerText = 'Enviar'

form.appendChild(submitButton);

inputEmail.removeAttribute('placeholder')















