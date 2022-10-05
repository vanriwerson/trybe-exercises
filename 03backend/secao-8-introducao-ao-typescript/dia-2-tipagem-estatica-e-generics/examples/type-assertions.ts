type ShortAddress = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

function stringToJson(str: string): unknown { // o retorno da função tem um tipo desconhecido
  const result = JSON.parse(str);
  return result;
}

// "as User"faz com que o retorno da função seja do tipo User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. Informa que o retorno da função será do tipo ShortAddress
const address = <ShortAddress> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;

// Other 'Trust me, compiler!' examples:

const str: unknown = 'texto'; // simulando um valor supostamente desconhecido
// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
(str as string).split('') // Corrigindo o erro acima usando o 'as'

const num: string = '2';
// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
(num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown
