//1.Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

//Como faremos um quadradode lado n, podemos igualar as variáveis para base e altura
let n = 5;
let width = (height = n);

//Opcional: Criar uma variável para o caractere que será impresso
let drawing = "*";

//Criar um loop para a altura
for (let column = 1; column <= height; column += 1) {
  //Definir uma variável para armazenar o desenho da linha
  let rowDrawing = "";

  //Criar um loop para a largura
  for (row = 1; row <= width; row += 1) {
    //Adicionar caracteres à linha
    rowDrawing += drawing;
  }
  //Imprimir a linha desenhada
  console.log(rowDrawing);
}
