import { connectsApi } from "./conectApi.js";

const lists = document.querySelector("[data-list]");

function constructCard(itemVideo) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
  <iframe width="100%" height="72%" src=${itemVideo.url}
  title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
<div class="descricao-video">
  <img src=${itemVideo.imagem} alt="logo canal alura">
  <h3>${itemVideo.titulo}</h3>
  <p>${itemVideo.descricao}</p>
</div>
  `;
  return video;
}

async function videolists() {
  const list = await connectsApi.videoList();

  list.forEach((video) => {
    const li = constructCard(video);
    lists.append(li);
  });
}

videolists();
