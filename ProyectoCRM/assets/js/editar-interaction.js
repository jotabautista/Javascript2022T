window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI(`${url}/interaction/${id}`, "GET", {})
    .then( interaction => {
        console.log(interaction)
        const interactionForm = document.querySelector("#interaction-form")
        interactionForm.elements["id"].value = interaction.id
        interactionForm.elements["customer"].value = interaction.customer.name
        interactionForm.elements["user"].value = interaction.user.name
        interactionForm.elements["note"].value = interaction.note
        interactionForm.elements["createdAt"].value = interaction.createdAt
    })
})

const interactionForm = document.querySelector("#interaction-form")
function guardarinteraction(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    const customername = inputs["customer"].value;
    const username = inputs["user"].value;

    callAPI(`${url}/customer?name=${customername}`, "GET", {})
    .then(customer => {
        if (customer.length === 0){
            Swal.fire({
                title: 'Proyecto CRM',
                text: 'Cliente no existe',
                icon: 'error',
                confirmButtonColor:'#3085d6',
                confirmButtonText: 'OK'
              });  
              return;
        }        
        callAPI(`${url}/user?name=${username}`, "GET", {})
        .then(user => {
            if (user.length === 0){
                Swal.fire({
                    title: 'Proyecto CRM',
                    text: 'usuario no existe',
                    icon: 'error',
                    confirmButtonColor:'#3085d6',
                    confirmButtonText: 'OK'
                  });  
                  return;
            }               
            var todayDate = new Date().toISOString().slice(0, 10);
            const interaction = {
                id: inputs["id"].value,
                note: inputs["note"].value,
                user: user[0],
                customer: customer[0],
                createdAt: todayDate
            }
            callAPI(`${url}/interaction/${interaction.id}`, "PUT", interaction)
            .then( () => {
                // if (confirm(`Desea volver al listado de interacciones?`)) {
                //     window.location.href ="interaction"
                // }
                Swal.fire({
                    title: `Desea volver al listado de interacciones?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si'          
                  }).then((result)=>{
                    if (result.isConfirmed) {
                        window.location.href = `interaction`                              
                      }           
                  });                 
            })  
        })
    })
}


interactionForm.addEventListener("submit", guardarinteraction)