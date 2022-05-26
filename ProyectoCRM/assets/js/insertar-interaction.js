const interactionForm = document.querySelector("#interaction-form")
function guardarinteraction(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    const customername = inputs["customer"].value;
    const customer = callAPI(`${url}/customer?name=${customername}`, "GET", {})
    .then(customer => {
        return customer;
    } )

    console.log(customer[0])


    var todayDate = new Date().toISOString().slice(0, 10);
    const interaction = {
        id: inputs["id"].value,
        note: inputs["note"].value,
        user: 1,
        customer: 1,
        createdAt: todayDate
    }

    callAPI(`${url}/interaction`, "POST", interaction)
    .then( () => {
        if (confirm(`Desea volver al listado de interacciones?`)) {
            window.location.href ="interaction"
        }
    })    
}

interactionForm.addEventListener("submit", guardarinteraction)