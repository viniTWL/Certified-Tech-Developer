cont1 = 0;
cont2 = 0;
let play = confirm('Você deseja jogar Jokenpo comigo?')
if(play == true){
    do{
        let opc = prompt("Selecione sua opção: 1 - Pedra 2 - Papel 3 - Tesoura")
        while(opc > 3){
            alert("Selecione uma opção valida")
            opc = prompt("Selecione sua opção: 1 - Pedra 2 - Papel 3 - Tesoura")
        }
        const pc = [1, 2, 3]
        let aleat = pc[Math.floor((Math.random() * pc.length))]
        let opcformat = ""
        let aleatformat = ""
        if(opc == 1){
            opcformat = "Pedra"
        }
        if(opc == 2){
            opcformat = "Papel"
        }
        if(opc == 3){
            opcformat = "Tesoura"
        }
        if(aleat == 1){
            aleatformat = "Pedra"
        }
        if(aleat == 2){
            aleatformat = "Papel"
        }
        if(aleat == 3){
            aleatformat = "Tesoura"
        }
        alert(`Você selecionou ${opcformat} e o PC escolheu ${aleatformat}`)
        if (opc == 1 && aleat == 2){
            alert('Perdeu!')
            cont2+= 1
        }
        else if(opc == 1 && aleat == 3){
            alert('Ganhou!')
            cont1+= 1
        }
        else if(opc == 2 && aleat == 1){
            alert('Ganhou!')
            cont1+= 1
        }
        else if(opc == 2 && aleat == 3){
            alert('Perdeu!')
            cont2+= 1
        }
        else if(opc == 3 && aleat == 1){
            alert('Perdeu!')
            cont2+= 1
        }
        else if(opc == 3 && aleat == 2){
            alert('Ganhou!')
            cont1+= 1
        }
        else{
            alert('Empatou!')
        }
        alert(`Placar: Você ${cont1} x ${cont2} PC`);
    }while(cont1 < 3 || cont2 < 3);
}
else{
    return alert("Que pena!")
}
if (cont1 == 3){
    alert('Você ganhou 3 vezes e é o Vencedor!')
}
else if (cont2 == 3){
    alert('O computador ganhou 3 vezes e é o Vencedor!')
}