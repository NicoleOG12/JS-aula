function dados(){
    const ds =  [
                    {id:1, nome:"Nicole", login:"nicole", password:"1234", email:"nicole@gmail.com"},
                    {id:2, nome:"Júlia", login:"julia", password:"5678", email:"julia@gmail.com"},
                    {id:3, nome:"Isabella", login:"isabella", password:"2468", email:"isabella@gmail.com"},
                    {id:4, nome:"Ana", login:"ana", password:"1357", email:"ana@gmail.com"},
                ]

    let json = JSON.stringify(ds) //passar para o formato json (JavaScript Object Notation)
    localStorage.setItem("banco", json) //base de dados local no navegador
}

function cadastrar(){

    const banco = JSON.parse(localStorage.getItem("banco"))

    let n = document.querySelector("#nome").value
    let g = document.querySelector("#login").value
    let sn = document.querySelector("#pass").value
    let m = document.querySelector("#email").value

    let usuario = {id:Date.now(), nome:n, login:g, password:sn, email:m}

    banco.push(usuario)

    let json = JSON.stringify(banco)

    localStorage.setItem("banco", json)

    //const vetor = [usuario]

    //print(usuario)
    //console.log(vetor)
}