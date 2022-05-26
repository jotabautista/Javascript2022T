window.addEventListener("load", event=> {
    callAPI(`${url}/user`, "GET", {}).then( user => {
        const ttable = document.querySelector("#table")
        const tbody = document.querySelector("#body")


        user.forEach(user => {
            const tr = document.createElement("tr")
            const tdid = document.createElement("td");
            tdid.innerHTML = user.id;
            tdid.setAttribute("scope","row")
            const tdname = document.createElement("td");
            tdname.innerHTML = user.name;
            const tdusername = document.createElement("td");
            tdusername.innerHTML = user.username;

            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarUser(buttonBorrar, user)
            const tddelete = document.createElement("td");
            tddelete.appendChild(buttonBorrar)

            const buttonEditar = document.createElement("button")
            buttonEditar.classList.add("btn","btn-primary", "btn-sm")
            buttonEditar.textContent = "Editar"
            agregarEventoEditarUser(buttonEditar, user)
            const tdeditar = document.createElement("td");
            tdeditar.appendChild(buttonEditar)            

            tr.appendChild(tdid)
            tr.appendChild(tdname)
            tr.appendChild(tdusername)
            tr.appendChild(tddelete)
            tr.appendChild(tdeditar)
            tbody.appendChild(tr)
        });
    })
})

function agregarEventoBorrarUser(button, user) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el usuario ${user.name}?`)) {
            callAPI(`${url}/user/${user.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

function agregarEventoEditarUser(button, user) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea editar el usuario ${user.name}?`)) {
           window.location.href = `editar-user?id=${user.id}`
        }
    })
}