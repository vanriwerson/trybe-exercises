// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const skills = ['Git', 'HTML', 'CSS', 'Javascript', 'Didática'];

// Crie um código JavaScript com a seguinte especificação:

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
const greetings = (name) => {
  phrase = 'Tryber x aqui!';
  const newPhrase = phrase.replace('x', name);
  return newPhrase
  //`Tryber ${name} aqui!`;
}

console.log(greetings('Bruno'));


// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const joinGreetingsAndSkills = (initialPhrase) => {
  skills.sort()
  const fullGreetings = `${initialPhrase} Minhas cinco principais habilidades são:
  ${skills[0]};
  ${skills[1]};
  ${skills[2]};
  ${skills[3]};
  ${skills[4]}. #goTrybe`;
  return fullGreetings;
}

console.log(joinGreetingsAndSkills(greetings('Bruno')));