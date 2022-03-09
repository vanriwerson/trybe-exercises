//2.Imprima um triângulo retângulo com 5 asteriscos de base.

//Definir uma variável para a base
let base = 5;

//Definir uma variável para o número de asteriscos a serem impressos
let draw = "*";

//Repetir o desenho até a base desejada
for (base = 1; base <= 5; base += 1) {
  //Desenhar o caractere desejado
  console.log(draw);
  //Adicionar mais um caractere antes da próxima iteração
  draw += "*";
}

//3.Agora inverta o lado do triângulo.

//Definir uma variável para armazenar os espaços vazios
let spaces = base - 1;

//Criar um loop para desenhar as linhas
for (let row = 1; row < base; row += 1) {
  //Definir uma variável para armazenar o desenho da linha
  let rowDrawing = "";

  //Criar um loop para os espaços
  for (empty = 1; empty <= spaces; empty += 1) {
    //Adicionar espaços à linha
    rowDrawing += " ";
  }

  //Criar um loop para os asteriscos
  for (draw = 1; draw <= base - spaces; draw += 1) {
    //Adicionar caracteres à linha
    rowDrawing += "*";
  }
  //Imprimir a linha desenhada
  console.log(rowDrawing);

  //reduzir os espaços e aumentar os asteriscos
  spaces -= 1
}
