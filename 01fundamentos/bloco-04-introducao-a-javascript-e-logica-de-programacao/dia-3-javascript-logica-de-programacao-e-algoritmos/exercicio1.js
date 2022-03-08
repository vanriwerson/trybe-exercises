//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Fazer o fatorial de 10:
let num = 10;
let fatorial = num;

for (num; num > 1; num -= 1) {
  fatorial *= num - 1;
}

console.log(fatorial);
