// O default será utilizado caso nenhum argumento seja fornecido à função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.
const greeting = (user = 'usuário') => console.log(`Welcome, ${user}!`);
greeting(); // Welcome, usuário!
greeting('Bruno'); // Welcome, Bruno!

// Fixação:
// Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number = 1, value = 1) => {
  return number * value;
};

console.log(multiply(8));
console.log(multiply(3, 5));