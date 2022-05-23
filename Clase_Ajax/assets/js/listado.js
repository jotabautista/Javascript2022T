const btn =  document.querySelector("button");
const url = "https://jsonplaceholder.typicode.com/posts";

async function eventoClick(evento){
    const listado = await fetch(url).then(response => response.json());
    const elementoListado = doc.querySelector("listado") ;
    
    console.log(listado[0]);

    listado.forEach(element => {
        const elementPost = document.createElement("div");
        elementPost.classList.add("post");
        elementPost.textContent = `Id: ${element.id} | title: ${element.title}`;
        elementoListado.appendChild(elementPost);
    });
}

btn.addEventListener("click",eventoClick);