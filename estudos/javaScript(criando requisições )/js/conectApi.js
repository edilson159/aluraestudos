async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

async  function creatVideos(titulo, descricao, url,imagem) {
  const connection = await fetch("http://localhost:3000/videos", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        titulo:titulo,
        descricao:`${descricao} mil visualizações`,
        url:url,
        imagem:imagem
      })
  })
  const convertedConnection = await connection.json();
  return convertedConnection;
}
export const connectsApi = {
    videoList,
    creatVideos
}
    

    

