const btn = document.querySelector("#btn-listado")
const url = "https://jsonplaceholder.typicode.com/posts";



async function eventoClick(event) {
    const listado = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(listado)
}

function renderizarListadoPost(listado) {
    const elementoListado = document.querySelector("#listado")
    listado.forEach(post => {
        const elemtPost = document.createElement("div")
        elemtPost.classList.add("post")
        elemtPost.textContent = `Id: ${post.id} | title: ${post.title}.`
        elementoListado.appendChild(elemtPost)
    });
}

btn.addEventListener("click", eventoClick)