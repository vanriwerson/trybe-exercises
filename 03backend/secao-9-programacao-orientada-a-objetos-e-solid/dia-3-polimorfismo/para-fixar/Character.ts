abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log(`I'm a melee fighter.`);
  }

  specialMove() {
    console.log(`Melee atack.`);
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log(`I'm a long range fighter.`);
  }
  
  specialMove() {
    console.log(`Long range atack.`);
  }
}

const logCharMethods = (char: Character) => {
  char.talk();
  char.specialMove();
}

const fighter = new MeleeCharacter();
const shooter = new LongRangeCharacter();

logCharMethods(fighter);
logCharMethods(shooter);
