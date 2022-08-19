const fs = require("fs").promises;

async function main() {
  try {
    await fs.writeFile("./meu-arquivo.txt", "Meu Hello, World não existe mais");
    console.log("Arquivo escrito com sucesso!");
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
