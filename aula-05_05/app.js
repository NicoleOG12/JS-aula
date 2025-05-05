function dicionario(){
    
    //Array
    const dados = [//Dicionário de dados 
                    { id: 1, nome: "Nicole", login: "nicole", senha: "1234"},
                    { id: 1, nome: "Nic", login: "nic", senha: "5678"}
                  ]
    let meujson = JSON.stringify(dados)
    localStorage.setItem("banco", meujson)
}