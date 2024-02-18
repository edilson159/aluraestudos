const btnSortByPrice = document.querySelector("#btnOrdenarPorPreco");

btnSortByPrice.addEventListener("click", sortedBooks);

function sortedBooks() {
  let sortedPrice = books.sort((a, b) => a.preco - b.preco);
  displayBooksOnScreen(sortedPrice);
  console.table(sortedPrice);
}
