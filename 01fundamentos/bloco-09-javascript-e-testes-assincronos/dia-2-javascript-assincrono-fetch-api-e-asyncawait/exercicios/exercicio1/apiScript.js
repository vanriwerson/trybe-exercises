// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const jokeDisplay = document.getElementById('jokeContainer');

const fetchJoke = () => {
  // especificações da requisição:
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeDisplay.innerText = data.joke);
};

window.onload = () => fetchJoke();
