export default class Student {
  private _registry: string;
  private _name: string;
  private _testGrades: number[];
  private _workGrades: number[];

  constructor (registry: string, name: string, testGrades: number[], workGrades: number[]) {
    this._registry = registry;
    this._name = name;
    this._testGrades = testGrades;
    this._workGrades = workGrades;
  }

  getGradesSum = (): number => {
    const testGradesSum = this._testGrades.reduce((acc, curr) => acc + curr, 0);
    const workGradesSum = this._workGrades.reduce((acc, curr) => acc + curr, 0);

    return testGradesSum + workGradesSum;
  }

  getAverage = () => {
    const gradesSum = this.getGradesSum()
    const divisor = this._testGrades.length + this._workGrades.length;

    const average = gradesSum / divisor;
    return average;
  }
}