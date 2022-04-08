const hydrate = (string) => {
  let hydrateAdvice = '';
  // Extrai os números da string e os transforma num array
  const numbers = Array.from(string.replace(/[^0-9]/g, ''));
  // Soma os números extraídos da string
  const cups = numbers.reduce((acum, curr) => Number(acum) + Number(curr), 0);
  if(cups === 1) {
    hydrateAdvice = `${cups} copo de água`;
  } else {
    hydrateAdvice = `${cups} copos de água`;
  }
  return hydrateAdvice
};

module.exports = hydrate;
