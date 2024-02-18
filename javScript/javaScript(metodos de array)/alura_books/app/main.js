let books = [];

const endPointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getSearcheForBooksFromApi();

async function getSearcheForBooksFromApi() {
  const res = await fetch(endPointDaApi);
  books = await res.json();
  let discontedBook = applyDisconts(books);
  displayBooksOnScreen(discontedBook);
}
