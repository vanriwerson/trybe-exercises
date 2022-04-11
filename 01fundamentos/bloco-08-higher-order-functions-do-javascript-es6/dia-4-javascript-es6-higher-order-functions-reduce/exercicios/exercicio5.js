// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = (word) => {
  return word.split('').filter((char) => char === 'A' || char === 'a').length
};

function containsA() {
  return names.reduce((acc, curr) => acc + countA(curr), 0);
}
console.log(containsA()); // 20