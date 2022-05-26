window.addEventListener("load", event=> {
    callAPI(`${url}/interaction`, "GET", {}).then( interaction => {
        const ttable = document.querySelector("#table")
        const tbody = document.querySelector("#body")


        interaction.forEach(interaction => {
            const tr = document.createElement("tr")
            const tdid = document.createElement("td");
            tdid.innerHTML = interaction.id;
            tdid.setAttribute("scope","row")
            const tdnote = document.createElement("td");
            tdnote.innerHTML = interaction.note;
            const tdcreatedAt = document.createElement("td");
            tdcreatedAt.innerHTML = interaction.createdAt;

            const tduser = document.createElement("td");
            tduser.innerHTML = interaction.user.name;
            const tdcliente = document.createElement("td");
            tdcliente.innerHTML = interaction.customer.name;

            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarinteraction(buttonBorrar, interaction)
            const tddelete = document.createElement("td");
            tddelete.appendChild(buttonBorrar)

            const buttonEditar = document.createElement("button")
            buttonEditar.classList.add("btn","btn-primary", "btn-sm")
            buttonEditar.textContent = "Editar"
            agregarEventoEditarinteraction(buttonEditar, interaction)
            const tdeditar = document.createElement("td");
            tdeditar.appendChild(buttonEditar)            

            tr.appendChild(tdid)
            tr.appendChild(tdcreatedAt)
            tr.appendChild(tduser)            
            tr.appendChild(tdcliente)            
            tr.appendChild(tdnote)
            tr.appendChild(tddelete)
            tr.appendChild(tdeditar)
            tbody.appendChild(tr)
        });
    })
})

function agregarEventoBorrarinteraction(button, interaction) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar la interaccion ${interaction.id}?`)) {
            callAPI(`${url}/interaction/${interaction.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

function agregarEventoEditarinteraction(button, interaction) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea editar la interaccion ${interaction.id}?`)) {
           window.location.href = `editar-interaction?id=${interaction.id}`
        }
    })
}