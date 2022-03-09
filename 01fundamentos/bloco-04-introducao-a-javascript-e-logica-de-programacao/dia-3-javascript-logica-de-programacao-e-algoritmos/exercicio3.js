//3.Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ["java", "javascript", "python", "html", "css"];

//Definir variáveis para armazenar o maior e o menor número de caracteres do array
let majChar = minChar = array[0].length;

//Definir variáveis para armazenar a maior e a menor palavra do array
let majWord = minWord = array[0];

//Consultar cada palavra dentro do array:
for (let progLang = 1; progLang < array.length; progLang += 1) {
  //Definir uma variável para armazenar a quantidade de caracteres da palavra consultada
  let charNumber = 0;

  //Contar os caracteres de cada palavra e guardar o valor
  for (char = 0; char < array[progLang].length; char += 1) {
    charNumber += 1;
  }

  //Verificar se o número de caracteres é maior do que o registrado até o momento e atualizar as variáveis maj e majWord se necessário
  if (charNumber > majChar) {
    majChar = charNumber;
    majWord = array[progLang];
  }
  //Verificar se o número de caracteres é menor do que o registrado até o momento e atualizar as variáveis min e minWord se necessário
  if (charNumber < minChar) {
    minChar = charNumber;
    minWord = array[progLang];
  }
}

//Imprimir na saída os resultados da verificação
console.log('A maior palavra do array é', majWord);
console.log('A menor palavra do array é', minWord);
