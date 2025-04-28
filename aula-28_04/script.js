//Dicionario de dados
function dados(){
    const ds = [
                {id:1, login:"nicole", senha:"1234", nome:"Nicole", email:"nicole@gmail.com"},
                {id:2, login:"julia", senha:"5678", nome:"Júlia", email:"julia@gmail.com"},
                {id:3, login:"isabella", senha:"2468", nome:"Isabella", email:"isabella@gmail.com"},
                {id:4, login:"ana", senha:"1357", nome:"Ana", email:"ana@gmail.com"},
                ]

    let json = JSON.stringify(ds)
    localStorage.setItem("banco", json)
}

function logar(){
    //retorna os dados da função
    //const ds = dados()

    const ds = JSON.parse(localStorage.getItem("banco"))
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#pass").value

    for(let i=0; i<ds.length; i++){
        if(lg == ds[i].login && sn == ds[i].senha){
            console.log("Seu login é:" + ds[i].login + "\n Seu nome é:" + ds[i].nome)
            alert("logou")
            sessionStorage.setItem("user", ds[i].nome)
             //redirecionar
            window.location.href = "sobre.html"
            break
        }
    }
}

function logado(){
    let usuario = sessionStorage.getItem("user")
    document.querySelector("#usuario").value = usuario

}