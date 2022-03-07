//9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
const num1 = 6;
const num2 = 21;
const num3 = 12;

if (num1 % 2 > 0 || num2 % 2 > 0 || num3 % 2 > 0 || num1 % 2 < 0 || num2 % 2 < 0 || num3 % 2 < 0) {
  console.log(true);
} else {
  console.log(false);
}