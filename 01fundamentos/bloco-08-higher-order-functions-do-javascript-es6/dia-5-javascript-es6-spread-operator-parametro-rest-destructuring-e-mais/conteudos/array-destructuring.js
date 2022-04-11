// Desestruturação de Arrays:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Fixação:
//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

const [value, action] = saudacoes;
action(value);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida); // arroz gato água

[comida = 'arroz', animal = 'gato', bebida = 'água'];
console.log(comida, animal, bebida);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares); // [6, 8, 10, 12]

[odd1, odd2, odd3, even1, even2, even3, even4] = numerosPares;
console.log([even1, even2, even3, even4]);