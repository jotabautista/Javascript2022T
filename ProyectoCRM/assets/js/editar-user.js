window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI(`${url}/${id}`, "GET", {})
    .then( user => {
        const userForm = document.querySelector("#user-form")
        userForm.elements["id"].value = user.id
        userForm.elements["name"].value = user.name
        userForm.elements["username"].value = user.username
        userForm.elements["password"].value = user.password
    })
})

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

    callAPI(`${url}/${user.id}`, "PUT", user)
    .then( () => {
        if (confirm(`Desea volver al listado de Usuario?`)) {
            window.history.back()
        }
    })    
}


userForm.addEventListener("submit", guardaruser)