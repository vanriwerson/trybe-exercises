// 1.Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => n > 1 ? n * factorial(n - 1) : n;

// Entendendo a função: fatorial recebe uma arrow function com um parâmetro, que é o número para o qual o fatorial será calculado.
// Utilizando o operador ternário, é perguntado se o argumento reccebido é maior que 1.
// Caso seja, multiplica-se o parametro informado por uma nova chamada da função fatorial (recursividade), tendo como novo parâmetro n - 1.
// Essa chamada recursiva se repete até que tenhamos n = 1. Então a função retorna o valor final calculado para n.
console.log(factorial(6));

// 2.Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (phrase) => {
  const words = phrase.split(' ');
  words.sort((a, b) => a.length - b.length);
  const word = words[words.length -1];
  return word
}

console.log(longestWord('A maior palavra é inconstitucionalíssimamente'));
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));