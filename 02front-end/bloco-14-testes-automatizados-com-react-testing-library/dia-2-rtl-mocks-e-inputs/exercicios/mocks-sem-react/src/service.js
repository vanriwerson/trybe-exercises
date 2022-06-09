// Gera um número aleatório entre 0 e 100
const generateRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * max + min);
}
// Recebe uma string e retorná-la em caixa alta
const convertToUpperCase = (string) => string.toUpperCase();
// Recebe uma string e retorna só a primeira letra
const returnFirstChar = (string) =>  string.charAt(0);
// Recebe duas strings e as concatena
const concatTwoStrings = (string1, string2) => string1.concat(string2);

const fetchDogPicture = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return await (
    response.ok ? Promise.resolve(data) : Promise.reject(data));
}

module.exports = {
  generateRandomNumber,
  convertToUpperCase,
  returnFirstChar,
  concatTwoStrings,
  fetchDogPicture,
};
