//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromeCheck(word) {
  let reverseWord = word.split("").reverse().join("");

  if (word === reverseWord) {
    //return true;
    console.log(true);
  } else {
    //return false;
    console.log(false);
  }
}

palindromeCheck("ovo");

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
