const fs = require("fs").promises;
const { join } = require("path");

const readCacaoTrybeFile = async () => {
  const path = "/files/cacaoTrybeFile.json";
  try {
    const contentFile = await fs.readFile(join(__dirname, path), "utf-8");
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (content) => {
  const path = "/files/cacaoTrybeFile.json";
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId
  );
};

const getChocolateByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
};

const updateChocolate = async (id, update) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolateByName,
  updateChocolate,
};
