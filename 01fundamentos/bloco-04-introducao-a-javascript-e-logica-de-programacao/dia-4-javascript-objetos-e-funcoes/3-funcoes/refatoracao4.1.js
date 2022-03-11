/*
Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.
*/

//1.Faça cinco programas, um para cada operação aritmética básica.
function basicArithmeticOperations(num1, num2, operator) {
  switch (operator) {
    case "+":
      return `O resultado da soma é ${num1 + num2}`;
      break;
    case "-":
      return `O resultado da subtração é ${num1 - num2}`;
      break;
    case "*":
      return `O resultado da multiplicação é ${num1 * num2}`;
      break;
    case "/":
      return `O resultado da divisão é ${num1 / num2}`;
      break;
    case "%":
      return `O resultado do módulo (resto da divisão) é ${num1 % num2}`;
      break;
    default:
      return "Informe um operador válido (+, -, *, / ou %).";
  }
}

console.log(basicArithmeticOperations(8, 4, "+"));
console.log(basicArithmeticOperations(8, 4, "-"));
console.log(basicArithmeticOperations(8, 4, "*"));
console.log(basicArithmeticOperations(8, 4, "/"));
console.log(basicArithmeticOperations(8, 4, "%"));

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function findMajorOrMinorNumber(arrayOfNumbers, operator) {
    let searchingNumber = arrayOfNumbers[0]

    for (num = 0; num <= arrayOfNumbers.length; num += 1) {
        if(operator === '>') {
            if(arrayOfNumbers[num] > searchingNumber) {
                searchingNumber = arrayOfNumbers[num];
            }
        } else {
            if(arrayOfNumbers[num] < searchingNumber) {
                searchingNumber = arrayOfNumbers[num];
            }
        }
    }

    return `O número procurado é ${searchingNumber}`;
}

console.log(findMajorOrMinorNumber([3, 16, 29, 7], '>'));
console.log(findMajorOrMinorNumber([3, 16, 29, 7], '<'));

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function returnNumberSign (number) {
    if (number > 0) {
         return "O número informado é positivo";
      } else if (number < 0) {
        return "O número informado é negativo";
      } else {
        return "O número informado é zero";
      }
}

console.log(returnNumberSign(7));
console.log(returnNumberSign(0));
console.log(returnNumberSign(-3));

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
