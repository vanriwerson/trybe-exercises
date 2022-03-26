const sendFormBtn = document.getElementById('send-form');
const clearFormBtn = document.getElementById('clear-form');

sendFormBtn.addEventListener('click', (e) => e.preventDefault());

clearFormBtn.addEventListener('click', () => {location.reload()});