//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromeCheck(word) {
  /*
  .split() transforma word em array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  .reverse() inverte a ordem do array word: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  .join() transforma o array invertido em string novamente: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  */
  let reverseWord = word.split("").reverse().join("");

  //Compara a palavra informada com sua versão invertida e retorna verdadeiro ou falso
  if (word === reverseWord) {
    //return true;
    console.log(true);
  } else {
    //return false;
    console.log(false);
  }
}

palindromeCheck("ovo");
