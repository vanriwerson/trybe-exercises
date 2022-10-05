interface Automobile {
  model: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

const myCar: Automobile = {
  model: 'Palio',
  brand: 'Fiat',
  color: 'Red',
  doors: 2,
  gears: 5,
  turnOn: function (): void {
    throw new Error("Function not implemented.");
  },
  turnOff: function (): void {
    throw new Error("Function not implemented.");
  },
  speedUp: function (): void {
    throw new Error("Function not implemented.");
  },
  speedDown: function (): void {
    throw new Error("Function not implemented.");
  },
  break: function (): void {
    throw new Error("Function not implemented.");
  }
}

console.log(myCar); // imprime as características e funções de myCar

interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}
