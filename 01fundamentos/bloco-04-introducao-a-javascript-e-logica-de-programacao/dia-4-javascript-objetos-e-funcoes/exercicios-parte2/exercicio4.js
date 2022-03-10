/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']*/
function printLongestString(stringsArray) {
  let longestStringNumber = 0;
  let longestString = "";

  for (word of stringsArray) {
    if (word.length > longestStringNumber) {
      longestStringNumber = word.length;
      longestString = word;
    }
  }

  //return longestString
  console.log(longestString);
}

printLongestString(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
