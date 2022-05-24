const userForm = document.querySelector("#customer-form")
function guardarcustomer(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    var todayDate = new Date().toISOString().slice(0, 10);
    const customer = {
        id: inputs["id"].value,
        name: inputs["name"].value,
        email: inputs["email"].value,
        address: inputs["address"].value,
        createdAt: todayDate
    }

    callAPI(`${url}/customer`, "POST", customer)
    .then( () => {
        if (confirm(`Desea volver al listado de cliente?`)) {
            window.history.back()
        }
    })    
}

userForm.addEventListener("submit", guardarcustomer)