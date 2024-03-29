import Person from './Person';
import Student from "./Student";
import IEmployee from './Employee';
import Subject from './Subject';
import Teacher from './Teacher';

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

const student = new Student('Bruno', new Date('1989/12/03'), '01ADS11102022');
student.testGrades = [6, 7, 8, 9];
student.workGrades = [9, 9];
console.log(student);
console.log(`Soma das notas: ${student.getGradesSum()}`);
console.log(`Média: ${student.getAverage()}`);

const otherStudent = new Student('Morris', new Date('2005/12/31'), '02ADS11102022');
console.log(otherStudent);

const employee: IEmployee = {
  registration: '03ADS20221013',
  salary: 2300.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `EMP${randomStr}`;
  }
}

console.log(employee);

const math = new Subject('Matemática');
const history = new Subject('História');
const english = new Subject('Inglês');

console.log(math);
console.log(history);
console.log(english);

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, english);

console.log(marta);
console.log(joao);
console.log(lucio);
