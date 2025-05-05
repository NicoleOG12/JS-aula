/*
  Atributo (variável) - espaço reservado temporariamente na memória do computador (RAM)
*/

function mostrar(){

    let n = document.querySelector("#num").value

    console.log("Bem Vindo:" + n)
    alert("Somos JS " + n)
}

//For = Para
function para(){
    let n = document.querySelector("#num").value

for(let i = 0; i < 10; i = i + 1){
    //console.log("Contar:" + i )
        if (i == n){
            console.log("Achou o número:" + i)
            break
        }else{
            console.log("Não encontrou!")
        }

        i
    }
}

//For = Enquanto
function enquanto(){
    let n = document.querySelector("#num").value
    let i = 0

    while(i < 10){
        if (i == n){
            console.log("Achou o número:" + i)
            break
        } else {
            console.log("Não encontrou!")
        }

        i++
    }
}

//Faça..enquanto Do.. While
function facaenquanto(){
    let n = document.querySelector("#num").value
    let i = 0

    do{
        if (i == n){
            console.log("Achou o número:" + i)
            break
        }else{
            console.log("Não encontrou!")
        }

        i++
    } while(i < 10)
}

//Switch case = Selecionar
function selecionar(){
    let n = parseInt(document.querySelector("#num").value)

    switch(n){
        case 1: console.log("Você escolheu a opção:" + n)
        break
        case 2: console.log("Você escolheu a opção:" + n)
        break
        case 3: console.log("Você escolheu a opção:" + n)
        break
        case 4: console.log("Você escolheu a opção:" + n)
        break
        default: console.log("Nenhuma das condições")
    }

}