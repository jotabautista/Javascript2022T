window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( user => {
        const elementoListado = document.querySelector("#listado-usuarios")

        user.forEach(user => {
            const elemtPost = document.createElement("li")
            const link = document.createElement("a")
            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarCliente(buttonBorrar, user)
            link.href = `editar-user?id=${user.id}`
            link.textContent = `Id: ${user.id} | Nombre: ${user.name} | UserName: ${user.username}.`
            elemtPost.appendChild(link)
            elementoListado.appendChild(elemtPost)
            elementoListado.appendChild(buttonBorrar)
        });
    })
})

function agregarEventoBorrarCliente(button, user) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el usuario ${user.name}?`)) {
            callAPI(`${url}/${user.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}