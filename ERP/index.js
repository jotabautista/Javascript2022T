const express = require('express');
const app = express();

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/',function(req,res,){
    res.sendFile(__dirname+"/index.html")
});

app.get('/clientes',function(req,res,){
    res.sendFile(__dirname+"/views/cliente.html")
});

app.listen(2530);
console.log("http://localhost:2530");