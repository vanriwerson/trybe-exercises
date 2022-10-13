import Person from "./Person";

export default class Student extends Person{
  private _registry: string;
  private _testGrades: number[];
  private _workGrades: number[];

  constructor (name: string, birthDate: Date, registry: string) {
    super(name, birthDate)
    this._registry = registry;
    this._testGrades = [];
    this._workGrades = [];
  }

  get registry(): string {
    return this._registry;
  }

  set registry(newRegistry: string) {
    const minLen = 10;
    if (newRegistry.length < minLen) {
      throw new Error('A matrícula deve possuir no mínimo 10 caracteres.');
    }
    this._registry = newRegistry;
  }

  get testGrades(): number[] {
    return this._testGrades;
  }

  set testGrades(newTestGrades: number[]) {
    const gradesLen = 4;
    if (newTestGrades.length > gradesLen) {
      throw new Error('A pessoa estudante só pode possuir até 4 notas de prova.');
    }
    this._testGrades = newTestGrades;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set workGrades(newWorkGrades: number[]) {
    const gradesLen = 2;
    if (newWorkGrades.length > gradesLen) {
      throw new Error('A pessoa estudante só pode possuir até 2 notas de trabalho.');
    }
    this._workGrades = newWorkGrades;
  }

  getGradesSum(): number {
    const testGradesSum = this._testGrades.reduce((acc, curr) => acc + curr, 0);
    const workGradesSum = this._workGrades.reduce((acc, curr) => acc + curr, 0);

    return testGradesSum + workGradesSum;
  }

  getAverage(): number {
    const gradesSum = this.getGradesSum()
    const divisor = this._testGrades.length + this._workGrades.length;

    const average = gradesSum / divisor;
    return average;
  }

  generateRegistry(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}
