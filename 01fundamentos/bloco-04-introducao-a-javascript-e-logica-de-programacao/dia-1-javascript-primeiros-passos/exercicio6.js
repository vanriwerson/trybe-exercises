//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const peca = "bispo";
let analisar = peca.toLowerCase();

switch (analisar) {
  case "torre":
    console.log("Movimento vertical ou horizontal pelas casas livres.");
    break;
  case "cavalo":
    console.log("Movimento em L, mesmo saltando sobre outras peças.");
    break;
  case "bispo":
    console.log("Movimento nas diagonais pelas casas livres");
    break;
  case "rei":
    console.log("Movimento tanto vertical, quanto horizontal e diagonal por uma casa de distância.");
    break;
  case "rainha":
    console.log("Movimento tanto vertical, quanto horizontal e diagonal pelas casas livres");
    break;
  case "peão":
    console.log("Movimento sempre para a frente por uma casa de distância. Exceções: o primeiro movimento pode ser de até duas casas e o movimento de captura é na diagonal.");
    break;
  default:
    console.log("Informe uma peça válida");
}
