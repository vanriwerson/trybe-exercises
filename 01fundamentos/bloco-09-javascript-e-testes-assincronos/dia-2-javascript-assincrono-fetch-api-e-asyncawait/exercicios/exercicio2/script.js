const cryptoDisplay = document.querySelector('.crypto-container');

const toBRL = async ({ symbol } = coin) => {
  const lowerSymbol = symbol.toLowerCase();
  const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl/${lowerSymbol}.json`;

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const BRL = data[lowerSymbol];
    return BRL;
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

const appendLi = (coinsList) => {
  const topTen = coinsList.filter((coin) => coin.rank <= 10);

  topTen.forEach(async (coin) => {
    const { name, symbol, priceUsd } = coin;
    const convert = await toBRL(coin);

    const newCrypto = document.createElement('li');
    newCrypto.innerText = `${name} (${symbol}): US$ ${Number(priceUsd)
      .toFixed(2)} --- R$ ${convert};`;

    cryptoDisplay.appendChild(newCrypto);
  });
};

const fetchCrypto = async () => {
  const BASE_URL = 'https://api.coincap.io/v2/assets/';

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    appendLi(data.data);
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

fetchCrypto();
