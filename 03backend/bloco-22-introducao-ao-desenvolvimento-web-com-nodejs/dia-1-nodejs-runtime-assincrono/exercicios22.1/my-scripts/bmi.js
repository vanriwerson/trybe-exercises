const readline = require("readline-sync");

console.log("BMI(Body Mass Index) calculator");
const weight = readline.questionFloat("Enter your weight (Kg): ");
const height = readline.questionFloat("Enter your height (m): ");

const calculateBMI = (weight, height) => weight / (height * height);
const bmi = calculateBMI(weight, height);

console.log(`Your BMI is ${bmi.toFixed(2)}`);

if (bmi < 18.5) {
  console.log("Abaixo do peso");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Peso normal");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Sobrepeso");
} else if (bmi >= 30 && bmi < 35) {
  console.log("Obesidade grau I");
} else if (bmi >= 35 && bmi < 40) {
  console.log("Obesidade grau II");
} else {
  console.log("Obesidade mórbida");
}
