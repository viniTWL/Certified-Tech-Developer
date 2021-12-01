//1. pegar os dom

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

//2. evento de botão

btn.addEventListener('click', login);

//3. criar fun'ão assíncrona

async function login(event) { // função assíncrona que não recarrega a página

  //4. evitar submit

  event.preventDefault(); //evita que o formulário seja submetido

 //5. armazenar Api

  // url para onde enviar o request
  let url = `https://reqres.in/api/login`;

 //6. montar o corpo do request, com valores do campos;
  
  // montando o corpo do request com os campos do formulario
  // conforme a API utilizada (ReqRes)
  // json stringificado!
  let requestBody = {
    email: email.value,
    password: password.value
  }
  let requestBodyStr = JSON.stringify(requestBody);

  //7. montar o parâmetro fetch

  
  // montando o objeto com os parâmetros do request assíncrono:
  // method, headers, body
  let params = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBodyStr
  }

  //8. enviar o request

  // dispara o fetch com os parâmetros montados e espera
  let response = await fetch(url, params);//parâmetro url e params
  let response2 = await fetch(url);
  let data2 = await response2.json();
  
  //9. aguardar a resposta

  // quando a promessa de resposta se realizar,
  // dispara a transformação em json() e espera
  let data = await response.json();

  // pronto, use o objeto com a resposta como preferir
  // não se esqueça de estudar a estrutura do objeto que sua API retorna!
  console.log(data); // mostra o objeto com a resposta

  // async function getData() {
  //   let response = url('https://reqres.in/api/users')
  //   let data2 = await response.json()
  //   console.log(data2)
  //   JSON.stringify(data2)
  //   data2.forEach(element => {
  //     console.log(element);
  //   })
  // }
  

  if (data.error) { // se existe o campo error dentro da resposta
    alert(data.error);
  } else {
    
    data2.data.map(element => {
      console.log(element);
    })

    document.querySelector('#perfil').innerText = `Bem-vindo(a), ${email.value}`;
    let inserir = document.getElementById('inserir');
    inserir.appendChild(document.createElement('p')).innerText = `Bem-vindo(a), ${data2}`;

  }
  // teste
  if (data.ok) {
    alert('Login realizado com sucesso!');
  }
}