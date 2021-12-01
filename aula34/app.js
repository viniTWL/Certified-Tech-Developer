/*
REQUISITOS
- Crie um formulário para capturar um texto inserido.
- Implemente o evento "submit", use-o para salvar o comentário em um array.
- Cada vez que um novo comentário é adicionado, renderize-o em uma tag "p" (remova o código permanente do HTML e torne-o dinâmico).
- Salve constantemente as informações em localStorage, caso a página seja recarregada os comentários devem ser mantidos.
*/
let backcolor, textcolor, vname;

localStorage('bkcolor');
localStorage('txtcolor');
localStorage('nome');

if(typeof(Storage) != 'undefined'){
    if(localStorage.visits){
    }
else{
    document.write('Sem suporte!')
}
}

function record(){
     vname = document.getElementById('fnome').value;
     localStorage.bkcolor=backcolor;
     localStorage.txtcolor=textcolor;
     localStorage.nome=vname;

}

function defColor(opc, color) {
    if(opc == 1){
        document.body.style.backgroundColor = color
        backcolor=color
    }
    else{
        document.body.style.color = color
        textcolor=color
    }
}
