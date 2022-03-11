/*
Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.
*/

//1.Faça cinco programas, um para cada operação aritmética básica.
function basicArithmeticOperations(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "%":
      return num1 % num2;
      break;
    default:
      return "Informe um operador válido (+, -, *, / ou %).";
  }
}

console.log(basicArithmeticOperations(8, 4, "-"));
console.log(basicArithmeticOperations(8, 4, "*"));
console.log(basicArithmeticOperations(8, 4, "/"));
console.log(basicArithmeticOperations(8, 4, "%"));

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 10;
const d = 20;

if (c > d) {
  console.log("O maior número é", c);
} else {
  console.log("O maior número é", d);
}

//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const e = 15;
const f = 30;
const g = 45;
let maior;

if (e > f && e > g) {
  maior = e;
} else if (f > e && f > g) {
  maior = f;
} else {
  maior = g;
}

console.log("O maior número é", maior);

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const numero = 0;

if (numero > 0) {
  console.log("O número informado é positivo");
} else if (numero < 0) {
  console.log("O número informado é negativo");
} else {
  console.log("O número informado é zero");
}

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
