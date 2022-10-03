"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá, ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Crie uma nova função para calcular a área de um losango
function losangle(majDiagonal, minDiagonal) {
    return majDiagonal * minDiagonal / 2;
}
exports.losangle = losangle;
// Crie uma nova função para calcular a área de um trapézio
function trapeze(majBase, minBase, height) {
    return ((majBase + minBase) * height) / 2;
}
exports.trapeze = trapeze;
// Crie uma nova função para calcular a área de um círculo
function circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
exports.circle = circle;
