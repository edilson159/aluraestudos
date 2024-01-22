async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();
  console.log(convertedConnection);
  return convertedConnection;
}

export const connectsApi = {
    videoList
}
    

    

