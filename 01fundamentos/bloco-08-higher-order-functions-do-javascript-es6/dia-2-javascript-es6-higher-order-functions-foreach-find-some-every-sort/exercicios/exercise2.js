const books = require('./template');

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .
function smallerName() {
  let nameBook;
  let data = [];
  
  books.forEach((book) => {
    data.push({ bookName: book.name, nameLength: book.name.length});
  });
  data.sort((a, b) => a.nameLength - b.nameLength);
  nameBook = data[0].bookName;

  return nameBook;
}

console.log(smallerName()); // Retorna 'Duna'
