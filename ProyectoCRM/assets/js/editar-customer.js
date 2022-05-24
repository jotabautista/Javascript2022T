window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI(`${url}/customer/${id}`, "GET", {})
    .then( customer => {
        const customerForm = document.querySelector("#customer-form")
        customerForm.elements["id"].value = customer.id
        customerForm.elements["name"].value = customer.name
        customerForm.elements["email"].value = customer.email
        customerForm.elements["address"].value = customer.address
        customerForm.elements["createdAt"].value = customer.createdAt
    })
})

const customerForm = document.querySelector("#customer-form")
function guardarcustomer(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    const customer = {
        id: inputs["id"].value,
        name: inputs["name"].value,
        email: inputs["email"].value,
        address: inputs["address"].value,
        createdAt: inputs["createdAt"].value
    }

    callAPI(`${url}/customer/${customer.id}`, "PUT", customer)
    .then( () => {
        if (confirm(`Desea volver al listado de cliente?`)) {
            window.history.back()
        }
    })    
}


customerForm.addEventListener("submit", guardarcustomer)