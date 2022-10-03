let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é booleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é booleano e o valor é false

// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = "";
let abc: string = 'abc';

function sayHelloWorld(): void { // void indica ausência de um valor. No caso, indica que essa função não possui retorno
  console.log("Hello World!");
}

// são subtipos de todos os outros tipos
let nullValue = null;
let undefinedValue = undefined;
