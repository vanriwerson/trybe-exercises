export default class Subject {
  constructor(private _name: string = _name) {}

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}