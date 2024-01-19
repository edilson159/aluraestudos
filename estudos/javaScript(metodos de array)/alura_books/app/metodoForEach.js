const elementForInsertingBooks = document.getElementById("livros");

function displayBooksOnScreen(bookList) {
  elementForInsertingBooks.innerHTML = "";
  bookList.forEach((book) => {
    let availability =
      book.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    elementForInsertingBooks.innerHTML += `
          <div class="livro">
      <img class='${availability}' src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
          `;
  });
 
}
