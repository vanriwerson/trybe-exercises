//1.Faça cinco programas, um para cada operação aritmética básica. 
let a = 6
let b = 2;

//Adição
let soma = a + b;
console.log(soma);

// Subtração
let subtracao = a - b;
console.log(subtracao);

// Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao);

// Divisão (a / b)
let divisao = a / b;
console.log(divisao);

// Módulo (a % b)
let restoDaDivisao = a % b;
console.log(restoDaDivisao);

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 10;
const d = 20;

if(c > d) {
    console.log('O maior número é', c);
} else {
    console.log('O maior número é', d);
}

//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const e = 15;
const f = 30;
const g = 45;
let maior;

if(e > f && e > g) {
    maior = e;
} else if (f > e && f > g) {
    maior = f;
} else {
    maior = g;
}

console.log('O maior número é', maior);