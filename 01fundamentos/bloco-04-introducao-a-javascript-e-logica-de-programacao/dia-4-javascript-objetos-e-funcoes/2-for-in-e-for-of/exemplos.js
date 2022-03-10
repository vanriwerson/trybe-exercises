let cars = ["Saab", "Volvo", "BMW"];

for (let index in cars) {
  console.log(cars[index]); //Imprime o valor
}

let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let index in car) {
  console.log(index, car[index]); //imprime a chave e o valor
}

//O for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in.
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value); //resultado: hamburguer, bife, acarajé;
};
