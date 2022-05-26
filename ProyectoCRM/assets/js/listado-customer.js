window.addEventListener("load", event=> {
    callAPI(`${url}/customer`, "GET", {}).then( customer => {
        const ttable = document.querySelector("#table")
        const tbody = document.querySelector("#body")


        customer.forEach(customer => {
            const tr = document.createElement("tr")
            const tdid = document.createElement("td");
            tdid.innerHTML = customer.id;
            tdid.setAttribute("scope","row")
            const tdname = document.createElement("td");
            tdname.innerHTML = customer.name;
            const tdemail = document.createElement("td");
            tdemail.innerHTML = customer.email;
            const tdaddress = document.createElement("td");
            tdaddress.innerHTML = customer.address;
            const tdcreatedAt = document.createElement("td");
            tdcreatedAt.innerHTML = customer.createdAt;

            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarcustomer(buttonBorrar, customer)
            const tddelete = document.createElement("td");
            tddelete.appendChild(buttonBorrar)

            const buttonEditar = document.createElement("button")
            buttonEditar.classList.add("btn","btn-primary", "btn-sm")
            buttonEditar.textContent = "Editar"
            agregarEventoEditarcustomer(buttonEditar, customer)
            const tdeditar = document.createElement("td");
            tdeditar.appendChild(buttonEditar)            

            tr.appendChild(tdid)
            tr.appendChild(tdname)
            tr.appendChild(tdemail)
            tr.appendChild(tdaddress)
            tr.appendChild(tdcreatedAt)
            tr.appendChild(tddelete)
            tr.appendChild(tdeditar)
            tbody.appendChild(tr)
        });
    })
})

function agregarEventoBorrarcustomer(button, customer) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el usuario ${customer.name}?`)) {
            callAPI(`${url}/customer/${customer.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

function agregarEventoEditarcustomer(button, customer) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea editar el usuario ${customer.name}?`)) {
           window.location.href = `editar-customer?id=${customer.id}`
        }
    })
}