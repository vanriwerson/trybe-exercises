// Obs.: O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original
// Exemplo 1:
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Exemplo 2:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tabuada = (multiplicador) => nums.map((multiplicando) => multiplicando * multiplicador);

console.log(tabuada(3));
console.log(tabuada(5));

// Exemplo 3:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Sem map (resolvi sozinho):
const pricesTable = () => {
  let table = [];
  products.forEach((product, i) => {
    table.push(`{ ${product}: ${prices[i]} }`);
  });
  return table
}

// Com map (olhando o exemplo do conteúdo):
const pricesTable2 = (productsList, priceList) => productsList.map((product, i) => ({ [product]: priceList[i] }));

console.log(pricesTable());
console.log(pricesTable2(products, prices));

// Exemplo 4:
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
