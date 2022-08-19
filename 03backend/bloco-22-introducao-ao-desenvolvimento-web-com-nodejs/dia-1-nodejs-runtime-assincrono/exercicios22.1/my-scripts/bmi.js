const readline = require("readline-sync");

console.log("BMI(Body Mass Index) calculator");
const weight = readline.questionFloat("Enter your weight (Kg): ");
const height = readline.questionFloat("Enter your height (m): ");

const calculateBMI = (weight, height) => weight / (height * height);
const bmi = calculateBMI(weight, height);

console.log(`Your BMI is ${bmi.toFixed(2)}`);

if (bmi < 18.5) {
  console.log("Status: Underweight (thin)");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Status: Normal weight");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Status: Overweight");
} else if (bmi >= 30 && bmi < 35) {
  console.log("Status: Grade I obesity");
} else if (bmi >= 35 && bmi < 40) {
  console.log("Status: Grade II obesity");
} else {
  console.log("Status: Morbid Obesity");
}
