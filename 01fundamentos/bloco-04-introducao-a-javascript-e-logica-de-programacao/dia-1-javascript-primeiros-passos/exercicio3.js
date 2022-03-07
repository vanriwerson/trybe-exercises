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