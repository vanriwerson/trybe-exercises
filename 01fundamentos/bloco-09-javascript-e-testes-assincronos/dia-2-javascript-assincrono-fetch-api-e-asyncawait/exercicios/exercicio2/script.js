const cryptoDisplay = document.querySelector('.cryto-container');

const appendLi = (coinsList) => {
  const topTen = coinsList.filter((coin) => coin.rank <= 10);
  
  topTen.forEach((coin) => {
    const { name, symbol, priceUsd } = coin;

    const newCrypto = document.createElement('li');
    newCrypto.innerText = `${name}(${symbol}): ${Number(priceUsd).toFixed(2)};`;
    
    cryptoDisplay.appendChild(newCrypto);
  });
};

const fetchCrypto = async () => {
  const BASE_URL = 'https://api.coincap.io/v2/assets/';

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    appendLi(data.data);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

fetchCrypto();