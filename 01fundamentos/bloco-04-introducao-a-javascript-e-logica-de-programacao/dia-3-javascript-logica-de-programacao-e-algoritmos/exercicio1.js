//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Fazer o fatorial de 10:
let num = 10;
let fatorial = 1;

for (num; num > 0; num -= 1) {
  fatorial *= num;
}

console.log(fatorial);
