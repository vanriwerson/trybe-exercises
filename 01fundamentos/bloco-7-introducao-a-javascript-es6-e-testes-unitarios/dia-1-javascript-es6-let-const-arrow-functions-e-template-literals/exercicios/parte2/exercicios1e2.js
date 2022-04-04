// 1.Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (n) => n > 1 ? n * fatorial(n - 1) : n;

console.log(fatorial(6));

// Entendendo a função: fatorial é uma constante que recebe uma arrow function com um parâmetro, que é o número para o qual o fatorial será calculado.

// 2.Crie uma função que receba uma frase e retorne qual a maior palavra.