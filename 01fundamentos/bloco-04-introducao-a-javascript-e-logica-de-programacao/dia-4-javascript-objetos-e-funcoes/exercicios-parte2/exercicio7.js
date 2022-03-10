//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
function verifyMatchingSufixes(word, sufix) {
  //Define a partir de onde word que deve ser cortado
  let sufixLength = word.length - sufix.length;
  //Corta parte da string com base no index informado: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  let wordSufix = word.substr(sufixLength);

  //Compara os sufixos obtidos e retorna verdadeiro ou falso
  if (wordSufix === sufix) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verifyMatchingSufixes("trybe", "be");
