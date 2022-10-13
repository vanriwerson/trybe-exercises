class SuperClass {
  constructor(
    public isSuper: boolean = true,
  ) {}

  public sayHello = (): void => console.log('Olá, mundo!');
}

class SubClass extends SuperClass {
  constructor() {
    super(false)
  }
}

const myFunc = (obj: SuperClass) => {
  obj.sayHello()

  if (obj.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!');
  }
}

const superClass = new SuperClass();
const subClass = new SubClass();

myFunc(superClass);
myFunc(subClass);
