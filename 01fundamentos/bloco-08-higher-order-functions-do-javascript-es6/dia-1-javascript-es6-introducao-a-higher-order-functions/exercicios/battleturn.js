const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = (minDamage, maxDamage) => Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
console.log(dragonDamage(15, dragon.strength));

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (strength, weaponDmg) => {
  const minDamage = strength;
  const maxDamage = strength * weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
};
console.log(warriorDamage(warrior.strength, warrior.weaponDmg));

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamage = (intelligence, mana) => {
  const minDamage = intelligence;
  const maxDamage = intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
  const remainingMana = mana >= 15 ? mana - 15 : 'Não possui mana suficiente';
  return {
    damage: typeof remainingMana === 'number' ? damage : remainingMana,
    mana: typeof remainingMana === 'number' ? remainingMana : mana,
  }
}
console.log(mageDamage(mage.intelligence, 14));
console.log(mageDamage(mage.intelligence, 15));
