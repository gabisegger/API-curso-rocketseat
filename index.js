//código server
const express = require('express');

const app = express();

app.listen('3000'); 

//rotas

//GET
app.route('/').get( (req,res) => res.send("hello"))
app.route('/sobre').get( (req,res) => res.send("hello sobre"))

//POST
//middleware
app.use(express.json())
app.route('/').post( (req,res) => res.send(req.body))