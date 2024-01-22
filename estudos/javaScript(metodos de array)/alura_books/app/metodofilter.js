const button = document.querySelectorAll(".btn");

button.forEach((btn) => btn.addEventListener("click", frontBooksFilter));

function frontBooksFilter() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  let filteredBooks =
    category == "disponivel"
      ? filterByAvailiability()
      : filterByCategory(category);
  displayBooksOnScreen(filteredBooks);
  if (category == "disponivel") {
    const totalValue = calculateValueTotalByBooksAvailiability(filteredBooks);
    console.log(totalValue);
    dispayValueBooks(totalValue);
  }
}

function filterByCategory(category) {
  return books.filter((book) => book.categoria == category);
}

function filterByAvailiability() {
  return books.filter((book) => book.quantidade > 0);
}

function dispayValueBooks(totalValue) {
  elementPriceBooksAvailability.innerHTML = `
  <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
      </div>
  `;
}
