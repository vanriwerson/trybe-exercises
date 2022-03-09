//4.Faça uma pirâmide com n asteriscos de base (n sempre ímpar):

//Definir uma variável para a largura da base
let base = 15;
//Definir uma variável para o numero de linhas
let rows = Math.ceil(base / 2);
//Definir uma variável para o número de espaços a serem desenhados
let leftSpaces = Math.floor(base / 2);
//Definir as variáveis para o que será desenhado
let drawSpaces = " ";
let drawChar = "*";

//Criar um loop para desenhar as linhas
for (row = 1; row <= rows; row += 1) {
  //Definir uma variável para armazenar o que está sendo desenhado na linha atual
  let drawingRow = "";

  //Criar um loop para desenhar os espaços definidos
  for (let column = 1; column <= leftSpaces; column += 1) {
    drawingRow += drawSpaces;
  }

  //Adicionar os caracteres após os espaços
  drawingRow += drawChar;

  //Imprimir a linha atual
  console.log(drawingRow);

  //Atualizar as variáveis de desenho para a próxima linha
  drawChar += "**";
  leftSpaces -= 1;
}
