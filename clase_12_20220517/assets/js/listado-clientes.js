window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( clientes => {
        const elementoListado = document.querySelector("#listado-clientes")

        clientes.forEach(cliente => {
            const elemtPost = document.createElement("li")
            const link = document.createElement("a")
            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarCliente(buttonBorrar, cliente)
            link.href = `editar-clientes?id=${cliente.id}`
            link.textContent = `Id: ${cliente.id} | Nombre: ${cliente.name}.`
            elemtPost.appendChild(link)
            elementoListado.appendChild(elemtPost)
            elementoListado.appendChild(buttonBorrar)
        });
    })
})

function agregarEventoBorrarCliente(button, cliente) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${cliente.name}?`)) {
            callAPI(`${url}/${cliente.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}