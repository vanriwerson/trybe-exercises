const cryptoDisplay = document.querySelector('.cryto-container');

const appendLi = (coinsList) => {
  for (let i = 0; i < 10; i += 1) {
    const { name, symbol, priceUsd } = coinsList[i];
    
    const newCrypto = document.createElement('li');
    newCrypto.innerText = `${name}(${symbol}): ${Number(priceUsd).toFixed(2)};`;
    
    cryptoDisplay.appendChild(newCrypto); 
  }
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