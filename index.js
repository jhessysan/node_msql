const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require ("mysql2")

const app = express()

//definindo handlebars
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

//pasta de arquivo
app.use(express.static("public"))

//trabalhar com dados json
app.use(express.urlencoded({
    extended: true
}))

//crud > CREATE, READ, UPDATE, DELETE 


app.use(express.json())

//rotas
app.post("/register/save", (req, res)=> {
    const {title, pageqty} = req.body

    const query = `
        INSERT INTO books (title, pageqty)
        VALUES ('${title}', '${pageqty}')
    `
    conn.query(query, (error)=>{
        if (error){
            console.log(error)
            return
        }
        res.redirect("/")
    })
})

app.get("/register",(req, res)=>{
    res.render("register")
})

app.get("/",(req, res)=>{
    const sql = 'SELECT * FROM books'

    conn.query(sql, (error, data)=>{
        if (error){
            return console.log(error)
        }

        const books = data

        res.render("home", {books})
    })

    
})

//conexão com mysql
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"nodemysql",
    port: 3306

})

conn.connect((error)=> {
    if (error){
        console.log(error)
        return
    }

    console.log("Conectado ao mysql")

    app.listen(3000),()=>{
        console.log("servidor rodando na porta 3000!")
    }
})