// Obter o maior número de um array com reduce:
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// Somar todos os números pares do array:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = numbers2.filter((even) => even % 2 === 0).reduce((acc, num) => acc + num);
console.log(sumEven); // 152