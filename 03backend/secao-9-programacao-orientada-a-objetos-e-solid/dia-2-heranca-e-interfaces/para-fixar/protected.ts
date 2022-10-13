class SuperClass2 {
  constructor(
    public isSuper: boolean = true,
  ) {}

  protected sayHello = (): void => console.log('Olá, mundo!');
}

class SubClass2 extends SuperClass2 {
  public sayHello2 = (): void => this.sayHello();
}

const myFunc2 = (obj: SubClass2) => {
  obj.sayHello2()
}

// const superClass2 = new SuperClass2();
const subClass2 = new SubClass2();

// myFunc2(superClass2);
myFunc2(subClass2);
