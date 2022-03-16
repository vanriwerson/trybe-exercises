//localStorage - salva os dados sem data de expiração:
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam"); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem("lastname", "Smith"); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem("lastname")); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname"); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

//sessionStorage - salva os dados apenas para a sessão atual:
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam"); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem("lastname", "Smith"); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem("firstname")); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("firstname"); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

const myObj = {
  name: "Link",
  age: 20
};

// Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
localStorage.setItem("myData", JSON.stringify(myObj));
// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o NOME DA CHAVE, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o OBJETO-VALOR que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
const recoveredObject = JSON.parse(localStorage.getItem("myData"));
// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
console.log(recoveredObject); // { name: 'Link', age: 20 }

let organization = {
  name: "trybe",
  since: 2019
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem("trybe", JSON.stringify(organization));
let org = JSON.parse(storage.getItem("trybe"));
console.log(org); // { name: 'trybe', since: 2019 }

let classes = ["2019/set", "2019/oct"];
storage.setItem("classes", JSON.stringify(classes));
let cls = JSON.parse(storage.getItem("classes"));
console.log(cls); // ['2019/set', '2019/oct']
