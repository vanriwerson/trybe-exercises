class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}

class Bird extends Animal {
  move() { // sobrescrevendo a implementação feita na superclasse
    super.move(); // chama a implementação feita na superclasse
    console.log(`${this.name} está voando.`);
  }
}

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);
