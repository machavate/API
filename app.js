const express = require('express')

const app = express();

const database = require('./models/db')

app.get("/", async(req,res)=>{
    res.send("pagina inicial Osman")
})

app.listen(8080, ()=>{
    console.log("Rodando na porta 8080")
})