const listItens = document.querySelectorAll('main ul li');
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function toggleTechClass(event) {
  for(i = 0; i < listItens.length; i += 1) {
    listItens[i].classList.remove('tech')
  }

  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', toggleTechClass);
secondLi.addEventListener('click', toggleTechClass);
thirdLi.addEventListener('click', toggleTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function atualizeTechText(event) {
  for(i = 0; i < listItens.length; i += 1) {
    if(listItens[i].classList.contains('tech')) {
      listItens[i].innerText = event.target.value;
    }
  }
}

input.addEventListener('input', atualizeTechText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.