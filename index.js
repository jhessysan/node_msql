const express = require("express")
const exphbs = require ("express-handlebars")
const maysql = require ("mysql2")

const app = express()

 // definindo handlebars  com template engine
 app.engine("handlebars", exphbs.engine())
 app.set ("view engine" , handlebars)

 // pasta de arquivos estáticos como css, imagens
 app.use(express.static("public"))

// trabalhar com dados no formato json
app.use (express.urlencoded({
    extended:true
}))

app.use(express.json())

// rotas 

app.get("/", ( requisicao, resposta) => {
    resposta.render("home")
})
// conexao co mysql
const con = mysql.createconnection({
    host: "localhost",
    user: "root",
    password: "root"
    database: "nodemysql"
    port: 3307
})

continue.connect((error) =>{
    if (error){
        console.log(error)
        return
    }

    console.log("conectado ao mysql!")
    
    app.listen(3000,()=>{
        console.log("Servidor rodando na porta 3000!")
    })

})
