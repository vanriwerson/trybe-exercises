interface MyInterface {
  myNumber: number;
  
  myFunc(myParam: number): string
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number = 7
  ) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `A soma de ${this.myNumber} e ${myParam} é igual a ${sum}.`
  }
}

const myClass = new MyClass();
console.log(myClass.myFunc(5));
