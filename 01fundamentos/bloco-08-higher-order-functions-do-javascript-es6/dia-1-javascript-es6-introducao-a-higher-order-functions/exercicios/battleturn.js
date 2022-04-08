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

// PARTE 1 //

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = (minDamage, maxDamage) => Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
// console.log(dragonDamage(15, dragon.strength));

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (strength, weaponDmg) => {
  const minDamage = strength;
  const maxDamage = strength * weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
};
// console.log(warriorDamage(warrior.strength, warrior.weaponDmg));

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
// console.log(mageDamage(mage.intelligence, 14));
// console.log(mageDamage(mage.intelligence, 15));

// PARTE 2 //

const gameActions = {
  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
  warriorTurn: (callback) => {
    warrior.damage = callback;
    dragon.healthPoints -= warrior.damage;
  },

  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  mageTurn: (callback) => {
    mage.damage = callback.damage;
    mage.mana = callback.mana;
    dragon.healthPoints -= mage.damage;
  },

  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  monsterTurn: (callback) => {
    dragon.damage = callback;
    warrior.healthPoints -= dragon.damage;
    dragon.damage = callback;
    mage.healthPoints -= dragon.damage;
  },

  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  actualizeBattleMembers: () => {
    gameActions.warriorTurn(warriorDamage(warrior.strength, warrior.weaponDmg));
    gameActions.mageTurn(mageDamage(mage.intelligence, mage.mana))
    gameActions.monsterTurn(dragonDamage(15, dragon.strength));
    return console.log(battleMembers);
  },

  solveGame: () => {
    if (dragon.healthPoints <= 0) {
      return 'Parabéns! Os heróis derrotaram o monstro!';
    }
    if (warrior.healthPoints <= 0 && mage.healthPoints <= 0) {
      return 'Os heróis foram derrotados!'
    }
  }
};

// Inicia o jogo:
const renderGame = () => {
  gameActions.actualizeBattleMembers();
console.log('<<<<<<<<<<<<------------======= FIM DE TURNO =======------------>>>>>>>>>>>>\n');
  if((warrior.healthPoints > 0 && mage.healthPoints > 0) || dragon.healthPoints > 0) {
    renderGame();
  } else {
    console.log(gameActions.solveGame());
  }
};

renderGame();
