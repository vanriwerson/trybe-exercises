//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  //Organizar o vetor em um único array para reduzir um laço de repetição
  let joinedArray = [...vector.join(",")];
  //Definir um array para armazenar os números pares
  let evenNumbers = [];

  //Loop pelos valores do array organizado
  for (number of joinedArray) {
    //Se o número atual for par
    if (number % 2 === 0) {
      //será adicionado ao array de resposta
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

console.log(arrayOfNumbers(vector));
