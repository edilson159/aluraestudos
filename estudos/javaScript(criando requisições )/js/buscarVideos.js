import { connectsApi } from "./conectApi.js";
import constructCard from "./mostrarVideos2.js";

async function searchVideo(event) {
  event.preventDefault();
  const filterValue = document.querySelector(".pesquisar__input").value;
  const search = await connectsApi.searchVideos(filterValue);

  const list = document.querySelector("[data-list]");
  search.forEach((itemVideo ) =>
    list.appendChild(
      constructCard(itemVideo)
    )
  );
}

const buttonSearch = document.querySelector("[data-botao-pesquisa]");
console.log(buttonSearch);

buttonSearch.addEventListener("click", (event) => searchVideo(event));
