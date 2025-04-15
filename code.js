console.log('Olá JS')

function imprimir() {
    console.log('Hello World!')
}

function get_name() {
    // let nome = document.getElementById('nome')
    let n = document.querySelector("#nome").value
    console.log('Seu nome é: '+n)
}

function login() {
    let lg = document.querySelector('#login').value
    let sn = document.querySelector('#pass').value

    // console.log('Seu login é: ' + lg + "\n Sua senha é:" +sn)
    // alert('Seu login é: ' + lg + "\n Sua senha é:" +sn)
    
    let usuario = "Nome"
    let senha = 1234

    // && - condição 'E'
    // || condição 'OU'
    // == condição de comparação

    let vetor = ['Melancia', 'Melão', 'Maçã']

    if(lg == usuario && sn == senha) {
        alert('Logou!')
        for(i = vetor; i < 3; i++)
        console.log(i)
    }
}


// var - global -- deve evitar seu uso
// // let - local e pode mudar o estado de seu valor 
// const - o valor não pode ser mudado 

