//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indexOfMinorValue(array) {
  let min = array[0];

  for (let value of array) {
    if (value < min) {
      min = value;
    }
  }

  //return array.indexOf(min);
  console.log(array.indexOf(min));
}

indexOfMinorValue([5, 12, 29, 16]);
