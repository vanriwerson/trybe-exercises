const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  // const url = 'api.chucknorris.io/jokes/random?category=dev'; // Força um erro ao omitir https://

  // console.log(fetch(url)); retorna apenas o estado da promise, não o dado
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();