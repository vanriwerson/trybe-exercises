export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }
  
  set name(newName: string) {
    this.isNameValid(newName);
    this._name = newName;
  }
  
  private isNameValid(name: string): void { // Usar arrow function causou vazamento de escopo (imprimiu o método mesmo ele sendo privado)
    const minLen = 3;
    if (name.length < minLen) {
      throw new Error('O nome deve possuir no mínimo 3 caracteres.')
    }
  }

  get birthDate(): Date {
    return this._birthDate;
  }
  
  set birthDate(newBirthDate: Date) {
    this.isBirthDateValid(newBirthDate);
    this._birthDate = newBirthDate;
  }

  static getAge(birthDate: Date): number {
    const dateDiff = Math.abs(new Date().getTime() - birthDate.getTime());
    const yearInMilisseconds = 31_536_000_000;
    const age = Math.floor(dateDiff / yearInMilisseconds);
    return age;
  }

  private isBirthDateValid(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
  
}