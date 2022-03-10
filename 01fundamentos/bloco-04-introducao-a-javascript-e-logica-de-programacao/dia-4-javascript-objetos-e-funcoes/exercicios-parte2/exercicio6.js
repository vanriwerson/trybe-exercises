//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function sumNaturalNumbersOfOneUntilN(naturalNumber) {
  let sum = 0;

  for (let counter = 1; counter <= naturalNumber; counter += 1) {
    sum += counter;
  }

  //return sum;
  console.log(sum);
}

sumNaturalNumbersOfOneUntilN(5);
