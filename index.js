//código server
const express = require('express');

const app = express();

app.listen('3000'); 

//rotas

app.use(express.json()) //middleware

//GET - receber
//app.route('/').get( (req,res) => res.send("hello"))
//app.route('/sobre').get( (req,res) => res.send("hello sobre"))

//POST - enviar
//app.route('/').post( (req,res) => res.send(req.body))

//PUT - alterar
//let author = "Gabriela"

//app.route('/').get( (req,res) => res.send(author) )

// app.route('/').put( (req,res) => {
//     author = req.body.author
//     res.send(author)
// })

//DELETE - deletar informação
app.route('/:identificador').delete( (req,res) => {
    res.send(req.params.identificador)
})