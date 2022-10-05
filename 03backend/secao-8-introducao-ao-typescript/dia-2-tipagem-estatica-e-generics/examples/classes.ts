class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log("Woof!!!");
  }
}

const pet = new Dog('Pirata', 'preto', 16);
console.log(pet); // Não imprime os métodos da classe
pet.bark(); // Executa o método da classe

class House {
  owner: string;
  address: string;
  color: string;
  area: string;

  constructor(owner: string, address: string, color: string, area: string) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

const myHouse = new House('Alugada', 'Rua dos bobos, 0', 'Salmão', '100m²')
console.log(myHouse);


class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

const date = new Date();
const vacationTrip = new Flight('Campinas-SP', 'Bonito-MS', date, date, 4)
console.log(vacationTrip);
