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
    let sn = parseInt (document.querySelector('#pass').value)

    // console.log('Seu login é: ' + lg + "\n Sua senha é:" +sn)
    // alert('Seu login é: ' + lg + "\n Sua senha é:" +sn)
    
    let usuario = "Nome"
    let senha = 1234

    // && - condição 'E'
    // || condição 'OU'
    // == condição de comparação

    //let vetor = ['Melancia', 'Melão', 'Maçã']

    let login = ["Ana", "Bruno", "Carlos"]
    let pass = [1234, 1111, 2222 ]

    //JSON - JavaScript Object Notation

    let dados = [
                    {id:1, nome:"Nicole", login:"nicole", senha:"1234", email:"nicole@gmail.com" },
                    {id:2, nome:"Júlia", login:"julia", senha:"5678", email:"julia@gmail.com" },
                    {id:3, nome:"Isabella", login:"isabella", senha:"2468", email:"isabella@gmail.com" },
                    {id:4, nome:"Ana", login:"ana", senha:"1357", email:"ana@gmail.com" }
                ]

                //dados[0].nome


    for(let i=0; i < dados.length; i++){
        if(lg == dados[i].login && sn == dados[i].senha) {
            alert("Logou!" + dados.length)
            alert("Seu nome é:" + dados[i].nome + "\n Email:" + dados[i].email)

            window.location.href = "sobre.html"
        }
    }

    //if(lg == usuario && sn == senha) {
        //alert('Logou!')
        //for(i = vetor; i < 3; i++)
        //console.log(i)
    //}
}



// var - global -- deve evitar seu uso
// // let - local e pode mudar o estado de seu valor 
// const - o valor não pode ser mudado 

