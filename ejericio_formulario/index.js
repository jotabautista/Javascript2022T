const express = require('express')
const app = express()
 
app.use(express.static('assets'));

app.get('/ejercicio', function(req, res) {
    res.sendFile(__dirname + "/ejercicio.html")
})

app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3000")