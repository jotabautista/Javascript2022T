// console.log("Hola")

// function simple
function saludo() {
    console.log("Hola, desde una funcion")
}


// function con parametros
function saludos(evento) {
    // evitar que se refresque la pagina
    evento.preventDefault()
    console.log("Hola, desde una funcion")
}

const miFormulario = document.querySelector("#my-form")
console.log(miFormulario)


miFormulario.addEventListener('submit', saludos)

function saludoConParametros(nombre) {
    console.log("Hola, "+nombre)
}

let nombre = "Julio"
// Llamar una function con parametros
saludoConParametros(nombre)
