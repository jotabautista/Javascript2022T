const express = require('express')
const app = express()

app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname + "/formulario.html")
})

app.listen(2525)
console.log("Express esta corriendo en el puerto: 2525");
console.log("http://localhost:2525")