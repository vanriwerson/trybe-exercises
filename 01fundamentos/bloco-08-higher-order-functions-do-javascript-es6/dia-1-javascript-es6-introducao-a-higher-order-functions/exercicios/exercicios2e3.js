// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const checkPrizeDraw = (bet, prizeDraw) => {
  if (bet === prizeDraw) {
    return 'Parabéns! Você ganhou!';
  }
  return 'Não foi dessa vez. Que pena :-(';
}

const drawResult = (bet, check) => {
  const prizeDraw = Math.floor(Math.random() * 6);
  return check(bet, prizeDraw);
};

console.log(drawResult(2, checkPrizeDraw));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
