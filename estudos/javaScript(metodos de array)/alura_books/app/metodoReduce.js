function calculateValueTotalByBooksAvailiability(books) {
    return books.reduce((acc, book) => acc + book.preco, 0).toFixed(2)
}