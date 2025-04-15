function banco(){
    let dados = [
        {id:1, nome:"Nicole", login:"nicole", senha:"1234", email:"nicole@gmail.com" },
        {id:2, nome:"Júlia", login:"julia", senha:"5678", email:"julia@gmail.com" },
        {id:3, nome:"Isabella", login:"isabella", senha:"2468", email:"isabella@gmail.com" },
        {id:4, nome:"Ana", login:"ana", senha:"1357", email:"ana@gmail.com" }
    ]

    let json = JSON.stringify(dados)

    localStorage.setItem("banco", json)
}

//função de login

function login(){
    let mybd = JSON.parse (localStorage.getItem("banco"))
    let lg = document.querySelector("#login").value
    let sn =document.querySelector("#senha").value

    for(let i=0; i< mybd.lenght; i++){
        if(lg == mybd[i].login && sn == mydb[i].senha){
            alert("Encontrou!")
        }
    }
}