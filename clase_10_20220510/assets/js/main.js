
// Obtener elemento por id
const caja = document.querySelector("#caja")

// obtener elemento por tag name
const listado = document.querySelectorAll("li")

for(let i=0; i<listado.length; i++) {
    // contatenamos con el backtrip
    listado[i].textContent = `🎉 ${listado[i].textContent} - muy bien`
}

// agregamos contenido html al elemento
caja.innerHTML = `
    <h1>Hola</h1>
    <p>Un gusto!</p>
`;

// obtener elemento por tag name
const listadoInput = document.querySelectorAll("input[type='text']")
console.log(listadoInput)

const padreLista = document.querySelector("ul")

for(let i=0; i<5; i++) {
    // Crear elmentos del DOM
    const li = document.createElement('li')
    const link = document.createElement('a')

    // Asignar valores a las propiedades
    link.href = "https://www.google.com"
    link.textContent = "Google.com"
    li.textContent = "👓 Ver TV" + i;
    li.style.cursor = 'pointer'

    // agregar evento click al elemento li
    li.addEventListener('click', event => {
        alert(li.textContent)
    })

    // agregar elementos creados a otros elementos
    li.appendChild(link)
    padreLista.appendChild(li)
}