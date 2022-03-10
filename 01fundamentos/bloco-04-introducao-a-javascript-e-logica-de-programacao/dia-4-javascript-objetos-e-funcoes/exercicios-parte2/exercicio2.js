//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indexOfMajorValue(array) {
  let maj = array[0];

  for (let value of array) {
    if (value > maj) {
      maj = value;
    }
  }

  //return array.indexOf(maj);
  console.log(array.indexOf(maj));
}

indexOfMajorValue([5, 12, 29, 16]);
