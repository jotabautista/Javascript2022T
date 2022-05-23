const boton = document.querySelector("#btn-ajax")

// Construir promesa
const miPromesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let persona = {
            nombre: "Julio",
            edad: 29
        }
        resolve(persona)
    }, 5000)
})


function llamarPromesa(limitTime) {
    return new Promise(function (resolve, reject) {
        if (limitTime > 3000) {
            reject("Limite muy largo")
        }
        setTimeout(() => {
            let persona = {
                nombre: "Julio",
                edad: 29
            }
            resolve(persona)
        }, limitTime)

    })
}

async function evento(event) {
    let persona;

    // instruccion con function
    // miPromesa.then(function(persona) {
    //     console.log(persona)
    // })

    // Usar promesas para codigo asyncrono
    miPromesa.then(persona1 => {
       persona = persona1;
    })

    persona = await llamarPromesa(1000);
    console.log(persona.nombre)
    persona = await llamarPromesa(5000);
    console.log(persona.nombre)

}

boton.addEventListener("click", evento)


