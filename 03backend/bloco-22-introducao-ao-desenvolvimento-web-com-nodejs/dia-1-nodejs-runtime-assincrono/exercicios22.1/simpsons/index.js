const fs = require("fs").promises;

const listSimpsonsChars = async () => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  console.log(chars.map(({ id, name }) => `${id} - ${name}`));
};

const getCharById = async (id) => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  const selectedChar = chars.find((char) => char.id === id);

  if (!selectedChar) {
    throw new Error("id não encontrado");
  }

  return selectedChar;
};

const filterChars = async () => {
  // remove as personagens de id 10 e 6
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  const remainingChars = chars.filter(
    (char) => char.id !== "6" && char.id !== "10"
  );

  await fs.writeFile("./simpsons.json", JSON.stringify(remainingChars));
};

const getFirstFourChars = async () => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  const remainingChars = chars.filter((char) => Number(char.id) < 5);

  await fs.writeFile("./simpsons.json", JSON.stringify(remainingChars));
};

const addChar = async () => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  const newChar = {
    id: "8",
    name: "Nelson Muntz",
  };

  await fs.writeFile("./simpsons.json", JSON.stringify([...chars, newChar]));
};

const replaceChar = async () => {
  const data = await fs.readFile("./simpsons.json");
  const chars = JSON.parse(data);

  const remainingChars = chars.filter((char) => char.id !== "8");

  const replacingChar = {
    id: "15",
    name: "Magie Simpson",
  };

  await fs.writeFile(
    "./simpsons.json",
    JSON.stringify([...remainingChars, replacingChar])
  );
};

async function main() {
  try {
    await listSimpsonsChars();
    const charById = await getCharById("5");
    console.log(charById);
    const filteredChars = await filterChars();
    await listSimpsonsChars();
    const firstFourChars = await getFirstFourChars();
    await listSimpsonsChars();
    await addChar();
    await listSimpsonsChars();
    await replaceChar();
    await listSimpsonsChars();
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main();
