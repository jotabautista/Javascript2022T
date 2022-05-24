window.addEventListener("load", event=> {
    callAPI(`${url}/customer`, "GET", {}).then( customer => {
        const elementoListado = document.querySelector("#listado-customer")

        customer.forEach(customer => {
            const elemtPost = document.createElement("li")
            const link = document.createElement("a")
            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarCustomer(buttonBorrar, customer)
            link.href = `editar-customer?id=${customer.id}`
            link.textContent = `Id: ${customer.id} | Nombre: ${customer.name} | Correo: ${customer.email}.`
            elemtPost.appendChild(link)
            elementoListado.appendChild(elemtPost)
            elementoListado.appendChild(buttonBorrar)
        });
    })
})

function agregarEventoBorrarCustomer(button, customer) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${customer.name}?`)) {
            callAPI(`${url}/customer/${customer.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}