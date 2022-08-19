const readline = require("readline-sync");

console.log("BMI(Body Mass Index) calculator");
const weight = readline.questionFloat("Enter your weight (Kg): ");
const height = readline.questionFloat("Enter your height (m): ");

const calculateBMI = (weight, height) => weight / (height * height);
const bmi = calculateBMI(weight, height);

console.log(`Your BMI is ${bmi.toFixed(2)}`);
