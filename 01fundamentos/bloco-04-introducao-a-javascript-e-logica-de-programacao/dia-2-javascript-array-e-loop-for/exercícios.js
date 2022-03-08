let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (num of numbers) {
  console.log(num);
}

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let total = 0;

for (num of numbers) {
  total += num;
}

console.log("A soma de todos os elementos do array é", total);

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = total / numbers.length;
console.log("A média aritmética de todos os elementos do array é", media);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];

for (let n = 0; n < numbers.length; n += 1) {
  if (maior < numbers[n]) {
    maior = numbers[n];
  }
}

console.log("O maior valor contido no array é", maior);

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;

for (num of numbers) {
  if (num % 2 != 0) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("O total de números ímpares presentes no array é", impar);
}

//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];

for (let n = 0; n < numbers.length; n += 1) {
  if (menor > numbers[n]) {
    menor = numbers[n];
  }
}

console.log("O menor valor contido no array é", menor);

//8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let contagem = [];

for (num = 1; num <= 25; num += 1) {
  contagem.push(num);
}

console.log("O conteúdo do array contagem é", contagem);
//Outra forma de impressão:
// for (cont of contagem) {
//   console.log(cont);
// }

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (cont of contagem) {
  console.log(cont / 2);
}
