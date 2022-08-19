const readline = require("readline-sync");
const operations = require("./operations");

console.log("Simple calculator");
const stNum = readline.questionInt("Type a number: ");
const operator = readline.question("Type an operator (*, /, +, -): ");
const ndNum = readline.questionInt("Type another number: ");

const calculate = () => {
  const { multiply, divide, sum, subtract } = operations;
  switch (operator) {
    case "*":
      return multiply(stNum, ndNum);
      break;
    case "/":
      return divide(stNum, ndNum);
      break;
    case "+":
      return sum(stNum, ndNum);
      break;
    case "-":
      return subtract(stNum, ndNum);
      break;
    default:
      return "ERROR";
  }
};

const result = calculate();

console.log(`${stNum} ${operator} ${ndNum} = ${result}`);
