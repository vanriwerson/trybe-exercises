//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
let base = 15;
let numberOfRows = Math.ceil(base / 2);
let charPosition = [numberOfRows, numberOfRows];

for (row = 1; row <= numberOfRows; row += 1) {
  //Armazena o desenho da linha atual
  let drawingRow = "";
  for (column = 1; column <= base; column += 1) {
    if (row === 1) { //Desenha a primeira linha
      if (column === charPosition[0]) {
        drawingRow += "*";
      } else {
        drawingRow += " ";
      }
    } else if (row < numberOfRows) { //Desenha as demais linhas até a penúltima
      if (column === charPosition[0] || column === charPosition[1]) {
        drawingRow += "*";
      } else {
        drawingRow += " ";
      }
    } else {//Desenha a última linha
      drawingRow += "*";
    }
  }

  console.log(drawingRow);
  //Atualiza as posições dos asteriscos antes de desenhar a próxima linha
  charPosition[0] -= 1;
  charPosition[1] += 1;
}
