//4.Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//Definir uma variável para armazenar o último número do intervalo consultado
let lastNumber = 50;

//Definir uma variável para armazenar os números primos encontrados
let primeNumbers = [];

//Percorrer o intervalo a partir de 2, que é o primeiro número primo
for (number = 2; number <= lastNumber; number += 1) {
  //Definir uma variável para armazenar o número de divisores de cada número
  let dividers = 0;

  //Testar o número de divisores exatos de 1 até o número atual
  for (dividerTest = 1; dividerTest <= number; dividerTest += 1) {
    //Se a divisão for exata, incrementar a variável dividers
    if (number % dividerTest === 0) {
      dividers += 1;
    }
  }

  //Se o total de divisores exatos encontrados for 2, temos um número primo.
  if (dividers === 2) {
    //Então o adicionamos ao array primeNumbers
    primeNumbers.push(number);
  }
}

//Por curiosidade, podemos imprimir todos os números primos encontrados
//console.log(primeNumbers);

//Imprimir na saída o maior número primo encontrado no intervalo fornecido
console.log(
  "O maior número primo encontrado no intervalo fornecido é", primeNumbers[primeNumbers.length - 1]);
