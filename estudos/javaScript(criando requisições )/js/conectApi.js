async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  
  
  return convertedConnection;
}

async function creatVideos(title, description, url, imagem) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: title,
      description: `${description} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  }); if (!connection.ok) {
    throw new Error('Não foi possivel enviar o video')
  }
  const convertedConnection = await connection.json();
  return convertedConnection;
}

// const searchBar = document.querySelector(".pesquisar__input");
// searchBar.addEventListener("input", filterSearch());

//  function filterSearch() {
//   const videos = document.querySelector(".videos__item");
//   const filterValue = searchBar.value.toLowerCase();

//   videos.forEach((video) => {
//     const title = video.querySelector(".titulo-video").texContent.toLowerCase();
//     video.style.block = filterValue
//       ? title.includes(filterValue)
//         ? "block"
//         : "none"
//       : "block";
//   });
// }
  
async function searchVideos(filterValue) {
  const connection = await fetch(
    `http://localhost:3000/videos?q=${filterValue}`
  );
  const convertedConnection = connection.json();
 console.log(`http://localhost:3000/videos?q=${filterValue}`,'hello');
  return convertedConnection;
}

export const connectsApi = {
  videoList,
  creatVideos,
  searchVideos,
};
