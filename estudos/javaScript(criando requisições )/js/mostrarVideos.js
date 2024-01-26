import { connectsApi } from "./conectApi.js";

const lists = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
}

async function videolists() {
    const list = await connectsApi.videoList();
    list.forEach(elemento => lists.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

videolists();