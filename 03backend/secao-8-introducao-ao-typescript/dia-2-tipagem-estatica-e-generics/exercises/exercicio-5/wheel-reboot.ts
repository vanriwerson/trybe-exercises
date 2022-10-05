// Remake da função filter do javascript utilizando generics TS:

// callback recebe um elemento do array, um index(opcional) e o próprio array(opcional),
// retornando um boolean
type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

// myFilter recebe um array de elementos de qualquer tipo e uma callback
function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  // Itera pelos elementos do array, utilizando a callback para definir quem será retornado
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      // Adiciona os itens válidos ao array de retorno
      newArray.push(array[i]);
    }
  }

  return newArray; // Retorna o array filtrado
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(myFilter(nums, (item, _index, _array) => item < 6 )); // [1, 2, 3, 4, 5]

const chars = ['a', 'b', 'c', 'd','e']
console.log(myFilter(chars, (item, _index, _array) => item !== 'c' )); // ['a', 'b', 'd','e']