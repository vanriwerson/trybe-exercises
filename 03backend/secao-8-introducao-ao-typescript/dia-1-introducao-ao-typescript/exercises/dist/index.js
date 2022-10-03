"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
// Exercício1 => losangle(majDiagonal, minDiagonal)
console.log(`Losango que tem D = 32cm e d = 18cm: ${Exercise.losangle(32, 18)}cm²`);
console.log(`Losango que tem D = 200cm e d = 50cm: ${Exercise.losangle(200, 50)}cm²`);
console.log(`Losango que tem D = 75cm e d = 25cm: ${Exercise.losangle(75, 25)}cm²`);
// Exercício2 => trapeze(majBase, minBase, height)
console.log(`Trapézio que tem B = 100cm, b = 70cm e altura = 50cm: ${Exercise.trapeze(100, 70, 50)}cm²`);
console.log(`Trapézio que tem B = 75cm, b = 50cm e altura = 35cm: ${Exercise.trapeze(75, 50, 35)}cm²`);
console.log(`Trapézio que tem B = 150cm, b = 120cm e altura = 80cm: ${Exercise.trapeze(150, 120, 80)}cm²`);
// Exercício3 => circle(radius)
console.log(`Círculo de raio igual a 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo de raio igual a 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo de raio igual a 12,5cm: ${Exercise.circle(12.5)}cm²`);
// Bônus1 => printWeekDays()
Exercise.printWeekDays();
// Bônus2 => printRainbowColors()
Exercise.printRainbowColors();
