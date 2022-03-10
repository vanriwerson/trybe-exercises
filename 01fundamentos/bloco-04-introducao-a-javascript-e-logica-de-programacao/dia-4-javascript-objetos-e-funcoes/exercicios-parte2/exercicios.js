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

/*5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]*/
function printModeOfIntegersArray(integersArray) {
    let mode = math.mode(integersArray);

    //return mode;
    console.log(mode);
}

//printModeOfIntegersArray([2, 3, 2, 5, 8, 2, 3]);

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

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
function verifyMatchingSufixes (word, sufix) {
    let sufixLength = word.length - sufix.length;
    let wordSufix = word.substr(sufixLength);

    if(wordSufix === sufix) {
        console.log(true);
    } else {
        console.log(false);
    }
}

verifyMatchingSufixes ('trybe', 'be');