const button = document.querySelectorAll(".btn");

button.forEach((btn) => btn.addEventListener("click", frontBooksFilter));

function frontBooksFilter() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  let filteredBooks =
    category == "disponivel"
      ? books.filter((book) => book.quantidade > 0)
      : books.filter((book) => book.categoria == category);
  displayBooksOnScreen(filteredBooks);
  console.log(filteredBooks)
}
