// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const addClickBtn = document.getElementById("addClick");
const counterDisplay = document.getElementById("counter");

addClickBtn.addEventListener("click", () => {
  counterDisplay.innerText = Number(counterDisplay.innerText) + 1;
});
