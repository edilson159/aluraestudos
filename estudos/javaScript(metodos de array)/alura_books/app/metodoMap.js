function applyDisconts(livros) {
    const discont = 0.3
    discontedBooks = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * discont)}
    })
    return discontedBooks
}