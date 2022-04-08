// EXERCÍCIO 1

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
const testingScope = (escopo) => {
  if(escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)'
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

testingScope(true);

// EXERCÍCIO 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
