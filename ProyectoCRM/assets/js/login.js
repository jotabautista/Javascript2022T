const userForm = document.querySelector("#user-form")

function buscaruser(event) {
    event.preventDefault()

    const inputs = event.target.elements;
    const user = {
        username: inputs["username"].value,
        password: inputs["password"].value,
    }

    callAPI(`${url}?username=${user.username}&password=${user.password}`, "GET", {})
    .then( user => {
        console.log(user);
        if (user.length === 0){
            Swal.fire({
                title: 'Proyecto CRM',
                text: 'User Name o Password Incorrecto',
                icon: 'error',
                confirmButtonColor:'#3085d6',
                confirmButtonText: 'OK'
              });  
        }else{
            window.location.href="user";
        }
    })    
}

userForm.addEventListener("submit", buscaruser)