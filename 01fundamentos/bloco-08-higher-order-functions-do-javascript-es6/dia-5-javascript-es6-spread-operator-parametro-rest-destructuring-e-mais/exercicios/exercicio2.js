// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest
const nums = [4, 5, 6, 7, 8];

const sum = (...array) => array.reduce((acc, curr) => acc + curr);
console.log(sum(...nums));