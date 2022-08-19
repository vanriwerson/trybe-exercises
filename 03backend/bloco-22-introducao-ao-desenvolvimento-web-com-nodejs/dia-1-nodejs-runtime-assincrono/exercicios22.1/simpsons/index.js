const fs = require("fs").promises;

const listSimpsonsChars = async () => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);
  console.log(chars.map(({ id, name }) => `${id} - ${name}`));
};

async function main() {
  try {
    await listSimpsonsChars();
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main();
