"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printRainbowColors = exports.printWeekDays = exports.circle = exports.trapeze = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
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
// Bônus:
// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia
var weekDays;
(function (weekDays) {
    weekDays[weekDays["sunday"] = 1] = "sunday";
    weekDays[weekDays["monday"] = 2] = "monday";
    weekDays[weekDays["tuesday"] = 3] = "tuesday";
    weekDays[weekDays["wednesday"] = 4] = "wednesday";
    weekDays[weekDays["thursday"] = 5] = "thursday";
    weekDays[weekDays["friday"] = 6] = "friday";
    weekDays[weekDays["saturday"] = 7] = "saturday";
})(weekDays || (weekDays = {}));
function printWeekDays() {
    Object.entries(weekDays).map((entry) => console.log(entry[0], entry[1]));
}
exports.printWeekDays = printWeekDays;
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["red"] = "vermelho";
    rainbowColors["orange"] = "laranja";
    rainbowColors["yellow"] = "amarelo";
    rainbowColors["green"] = "verde";
    rainbowColors["blue"] = "azul";
    rainbowColors["darkBlue"] = "anil";
    rainbowColors["violet"] = "violeta";
})(rainbowColors || (rainbowColors = {}));
function printRainbowColors() {
    Object.entries(rainbowColors).map((entry) => console.log(entry[0], entry[1]));
}
exports.printRainbowColors = printRainbowColors;
