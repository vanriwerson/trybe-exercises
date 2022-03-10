/*5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]*/
function printModeOfIntegersArray(integersArray) {
  //Definir uma variável para armazenar a moda
  let mode = "";
  //Definir uma variável para armazenar o maior número de repetições
  let majRepeatTimes = 0;

  //Construtor de arrays sem repetição: https://www.delftstack.com/pt/howto/javascript/javascript-remove-duplicates-from-an-array/
  let noRepeatArray = [...new Set(integersArray)];

  //Iterar pelo array filtrado
  for (let number in noRepeatArray) {
    //Definir uma variável para armazenar o número de repetições do número atual
    let repeatTimes = 0;
    //Iterar pelo array completo
    for (let test in integersArray) {
      //Contar as repetições do número atual
      if (noRepeatArray[number] === integersArray[test]) {
        repeatTimes += 1;
      }
    }

    //Se o número de repetições for maior do que o armazenado
    if (repeatTimes > majRepeatTimes) {
      //Atualiza o maior número de repetições
      majRepeatTimes = repeatTimes;
      //Atualiza a moda do array
      mode = noRepeatArray[number];
    }
  }
  //return mode;
  console.log(mode);
}

printModeOfIntegersArray([2, 3, 2, 5, 8, 2, 3]);
