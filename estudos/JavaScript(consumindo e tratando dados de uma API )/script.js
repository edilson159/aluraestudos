const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() {
  try {
    const buscar = await fetch("http://localhost:3000/videos");
    const videos = await buscar.json();

    videos.forEach((video) => {
      if (video.categoria == "") {
        throw new Error('Video não tem categoria')
      }  
      containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class= 'categoria' hidden>${video.categoria} </p>
                    </div>
                </li>
                `;
    });
  } catch (error) {
    containerVideos.innerHTML = `
    <p>Houve um erro ao carregar os videos: ${error}</p>
    `;
  } finally {
    alert("isso sempre acontece");
  }
}
buscarEMostrarVideos();

const barradePesquisa = document.querySelector('.pesquisar__input')

barradePesquisa.addEventListener('input', filtarPesquisa )

function filtarPesquisa() {

    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = barraDePesquisa.value.toLowerCase();
  
    videos.forEach((video) => {
      const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
  
      video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
    });
  }
  
const buttonCategoria = document.querySelectorAll('.superior__item')

buttonCategoria.forEach((button) => {
  let nomeCategoria = button.getAttribute('name')
  button.addEventListener('click', () => {
    filtrarPorCategoria(nomeCategoria)
  })
})

function filtrarPorCategoria (filtro) {
  const videos = document.querySelectorAll('.videos__item')
  for (let video of videos) {
    let categoria = video.querySelector('.categoria').textContent.toLowerCase()
    let valorFiltro = filtro.toLowerCase()

    if (categoria.includes(valorFiltro) && valorFiltro != "Tudo") {
      video.style.display = 'none'
    } else {
      video.style.display = 'block'
    }
  }
}