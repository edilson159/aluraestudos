import { connectsApi } from "./conectApi.js";

async function searchVideo(event) {
  event.preventDefault();
  const filterValue = document.querySelector("[data-pesquisa]").value;
  const search = await connectsApi.searchVideos(filterValue);
  console.log(filterValue);

  console.log(search);
}

const buttonSearch = document.querySelector("[data-botao-pesquisa]");
console.log(buttonSearch);

buttonSearch.addEventListener("click", (event) => searchVideo(event));
