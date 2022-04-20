// Exercício 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars.name), 4000); // alteração
};

getPlanet(); // imprime Marte depois de 4 segundos