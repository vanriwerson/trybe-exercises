//Exemplos de for/of:

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1; //Não altera o array, apenas escreve o que foi pedido (elemento+1)
  console.log(sum);
}
// 11
// 21
// 31