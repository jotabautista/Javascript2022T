const express = require('express');
const app = express();

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/',function(req,res,){
    res.sendFile(__dirname+"/index.html")
});

app.get('/user',function(req,res,){
    res.sendFile(__dirname+"/views/user.html")
});

app.get('/insertar-user',function(req,res,){
    res.sendFile(__dirname+"/views/insertar-user.html")
});

app.get('/editar-user',function(req,res,){
    res.sendFile(__dirname+"/views/editar-user.html")
});
app.get('/login',function(req,res,){
    res.sendFile(__dirname+"/views/login.html")
});

app.listen(3200);
console.log("http://localhost:3200");