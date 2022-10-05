function stringToJson<T>(str: string): T { // Passagem de tipo por parâmetro
  const result = JSON.parse(str);
  return result;
}

const user2 = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

const address2 = stringToJson<ShortAddress>('{"street":"Rua Tamarindo","number":1}') // Passamos o tipo na chamada da função

user2.name;
address2.street;

// É possível passar mais de um tipo generico na implementação:
function stringToJsonWithIdentifier<T, U>(str: string, id: U ): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

const user3 = stringToJsonWithIdentifier<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

const address3 = stringToJsonWithIdentifier<ShortAddress, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user3.id;
address3.id;


// Other generics examples:

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação