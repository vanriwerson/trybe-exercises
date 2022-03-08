//11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
let salarioBruto = 3000.00;
let descontoINSS;

if (salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * (8 / 100);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * (9 / 100);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  descontoINSS = salarioBruto * (11 / 100);
} else {
  descontoINSS = 570.88;
}

let salarioBase = salarioBruto - descontoINSS;
let descontoIR;

if (salarioBase <= 1903.98) {
  descontoIR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  descontoIR = salarioBase * (7.5 / 100) - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  descontoIR = salarioBase * (15 / 100) - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  descontoIR = salarioBase * (22.5 / 100) - 636.13;
} else {
  descontoIR = salarioBase * (27.5 / 100) - 869.36;
}

let salarioLiquido = salarioBase - descontoIR;
console.log('O salário líquido é de', salarioLiquido);