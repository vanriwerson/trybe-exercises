const books = require('./template');

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .
function authorBornIn1947() {
  return books.find((data) => data.author.birthYear === 1947);
}

console.log(authorBornIn1947());