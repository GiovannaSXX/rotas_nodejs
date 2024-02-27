/*var n1 = 10
var n2 = "Teste"

if(n1 < 10){
    console.log("N1 menor que 10")
}else{
    console.log("N1 igual ou maior que 10")
}

for(var n3 = 0; n3 <= 10; n3++){
    console.log("N3: " + n3)
}

var n4 = 0
while(n4 <= 10){
    console.log("N4: "+ n4)
    n4++
}*/

const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao Node JS")
})

app.get("/cadastrar/:produto", function(req, res){
    res.end(req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.send("Produto: " + req.params.produto + "<br>Modelo: "+ req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.send("Sac: " + req.params.sac + "<br>Produto: "+ req.params.produto)
})

app.listen(8081, function (){
    console.log("Servidor ativo!!")
})

