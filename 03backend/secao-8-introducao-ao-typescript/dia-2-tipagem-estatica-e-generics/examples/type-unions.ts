type StatesOfMatter = 'liquid' | 'solid' | 'gaseous'; // Permite apenas os valores definidos pelo tipo

const boilingWater: StatesOfMatter = 'gaseous';
const ice: StatesOfMatter = 'solid';
const freshWater: StatesOfMatter = 'liquid';

type IdentityDocument = number | string; // Permite apenas entradas com os tipos pré-definidos

const numberCPF: IdentityDocument = 12345678901
const stringCPF: IdentityDocument = '123.456.789-01'

type OperationalSystems = 'Linux' | 'MacOS' | 'Windows';

const theBestOne:OperationalSystems = 'Linux';
const theWorstOne: OperationalSystems = 'Windows';
const theExpensiveOne: OperationalSystems = 'MacOS';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

console.log(boilingWater);
console.log(ice);
console.log(freshWater);
console.log(numberCPF);
console.log(stringCPF);
console.log(theBestOne);
console.log(theWorstOne);
console.log(theExpensiveOne);
