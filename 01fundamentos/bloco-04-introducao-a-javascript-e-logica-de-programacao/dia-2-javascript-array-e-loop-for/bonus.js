let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//criação de um novo array a partir da multiplicação dos elementos de number
let numbersMultiplied = [];
let nextElement = 1;

for (element = 0; element < numbers.length; element += 1) {
  if (nextElement < numbers.length) {
    numbersMultiplied.push(numbers[element] * numbers[nextElement]);
    nextElement += 1;
  }
  
  if (element === numbers.length - 1) {
    numbersMultiplied.push(numbers[element] * 2);
  }
}

console.log(numbersMultiplied);

//ordenação crescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
  //console.log(numbers) //exibe as mudanças de posicionamento a cada iteração
}

console.log(numbers);

//ordenação decrescente
for (let index = numbers.length - 2; index >= 0; index -= 1) {
  for (
    let secondIndex = numbers.length - 1;
    secondIndex > index;
    secondIndex -= 1
  ) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
