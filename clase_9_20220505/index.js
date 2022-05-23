const express = require('express')
const app = express()
 
app.use(express.static('assets'));

app.get('/unidades-medida', function(req, res) {
    res.sendFile(__dirname + "/unidades-medida.html")
})


app.get('/flexbox', function(req, res) {
    res.sendFile(__dirname + "/flexbox.html")
})

app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3000")