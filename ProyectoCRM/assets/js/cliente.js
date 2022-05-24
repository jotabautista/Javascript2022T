const clienteForm = document.querySelector("#cliente-form");

function AddCliente(event){
    event.preventDefault();
    clienteForm.classList.add('was-validated');

    const inputs = event.target.elements;        
    const cliente = {
        nombre: inputs["nombre"].value,
        apellido: inputs["apellido"].value,
        direccion: inputs["direccion"].value,
        genero: inputs["genero"].value,
        correo: inputs["correo"].value
    }   
    
    if (clienteForm.checkValidity())
    {
    const url="http://localhost:3000/cliente";
    const header = {
        'Content-Type': 'application/json'
    }

    const configuracion ={
        method: "POST",
        body: JSON.stringify(cliente),
        headers: header        
    }

    fetch(url,configuracion)
    .then(response =>  response.json())
    .then(cliente => {
        Swal.fire({
            title: 'Proyecto ERP',
            text: 'Se agrego el cliente: '+cliente.id+" - "+cliente.nombre,
            icon: 'success',
            confirmButtonColor:'#3085d6',
            confirmButtonText: 'OK'
          });  
          clienteForm.classList.remove('was-validated');
          clienteForm.reset(); 
    })
}
}

clienteForm.addEventListener("submit",AddCliente);