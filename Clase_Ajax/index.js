// 1 - Agregar dependencia express
const express = require('express')

// 2 - Arrancar express
const app = express()

// Exponer carpeta assets para poder usar los archivos css y js
app.use(express.static('assets'));


// 4 - Agrega ruta con plantilla HTML
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3000")