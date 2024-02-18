import { connectsApi } from "./conectApi.js";
import constructCard from "./mostrarVideos2.js";

async function searchVideo(event) {
  event.preventDefault();
  const filterValue = document.querySelector(".pesquisar__input").value;
  const search = await connectsApi.searchVideos(filterValue);
  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((itemVideo) => list.appendChild(constructCard(itemVideo)));

  if (search.length == 0) {
    list.innerHTML = `
    <h2 class='mensagem__titulo'>Não existe um video com esse termo</h2>
    `
  }
}

const buttonSearch = document.querySelector("[data-botao-pesquisa]");
console.log(buttonSearch);

buttonSearch.addEventListener("click", (event) => searchVideo(event));
