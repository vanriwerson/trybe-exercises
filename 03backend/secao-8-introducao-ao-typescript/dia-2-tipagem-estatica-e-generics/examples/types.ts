type Bird = {
  flies: boolean,
  wingspan: number,
  region: string,
}

const penguin: Bird = { // Criação de variável do tipo Bird
  flies: false,
  wingspan: 45,
  region: 'Artic',
}

type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => a + b; // Criação de variável do tipo Sum

type Address = {
  publicPlace: string,
  number: number,
  district: string,
  postalCode: string,
  city: string,
  state: string,
}

const myAddress: Address = { // Criação de variável do tipo Address
  publicPlace: 'Rua Santa Catarina',
  number: 415,
  district: 'Parque Industrial',
  postalCode: '13601-345',
  city: 'Araras',
  state: 'SP',
}

console.log(penguin);
console.log(sum(5, 7));
console.log(myAddress);
