const userForm = document.querySelector("#user-form")

function buscaruser(event) {
    event.preventDefault()
    
    const inputs = event.target.elements;
    const user = {
        username: inputs["username"].value,
        password: inputs["password"].value,
    }

    callAPI(`${url}/user?username=${user.username}&password=${user.password}`, "GET", {})
    .then( user => {
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
/*
function  api(){
    const datopost ="http://dphcrmdev:8043/xrmdph/Printbinary";
    $.post(
        datopost,
        {
            BLName: "BL20220202C4",
            reportname: "joel",
            fileformat: "PDF"
        },
        function (response) {
        },
    ).done(function () {
       console.log("url=" + url ) ;
    });
}*/

userForm.addEventListener("submit", buscaruser)