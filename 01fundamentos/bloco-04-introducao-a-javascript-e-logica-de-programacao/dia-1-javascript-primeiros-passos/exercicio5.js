//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloA = 45;
const anguloB = -40;
const anguloC = 90;

if (anguloA + anguloB + anguloC === 180) {
  console.log(true);
} else if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log("Algum dos ângulos informados é inválido!");
} else {
  console.log(false);
}
