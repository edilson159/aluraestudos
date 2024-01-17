let livros = [];

const endPointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const elementForInsertingBooks = document.getElementById("livros");
getSearcheForBooksFromApi();

async function getSearcheForBooksFromApi (discontedBooks) {
  const res = await fetch(endPointDaApi);
  livros = await res.json();
  let discontedBooks = applyDisconts(livros);
  displayBooksOnScreen(discontedBooks);
}
