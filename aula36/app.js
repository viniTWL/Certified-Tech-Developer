let user = document.querySelector('#nmr');
let btn = document.querySelector('#btn');
let list = document.querySelector('ol')
let item = document.createElement('li')


/*btn.addEventListener('click', (event) => {
    event.preventDefault();
    let converted = parseInt(user.value)
    let url = ` https://jsonplaceholder.typicode.com/todos/${converted}/`
    fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
}) */

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let converted = parseInt(user.value)
    let url = ` https://jsonplaceholder.typicode.com/todos/${converted} `
    fetch(url)
  .then(response => response.json())
  .then((json) =>{
      json.map(element => {
          item.innerText = `${element}`
          list.appendChild(item)
      });
  })
}) 