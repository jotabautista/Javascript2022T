const userForm = document.querySelector("#user-form")
function guardaruser(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    const user = {
        id: inputs["id"].value,
        name: inputs["name"].value,
        username: inputs["username"].value,
        password: inputs["password"].value,
    }

    callAPI(`${url}/user`, "POST", user)
    .then( () => {
        if (confirm(`Desea volver al listado de Usuario?`)) {
            window.history.back()
        }
    })    
}

userForm.addEventListener("submit", guardaruser)