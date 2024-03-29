import Order from "./Order";
import Person from './Person';
import Student from "./Student";
import Data from "./Date";

const student = new Student('Bruno', new Date('1989/12/03'), '01ADS11102022');
student.testGrades = [6, 7, 8, 9];
student.workGrades = [9, 9];
console.log(student);
console.log(student.getGradesSum());
console.log(student.getAverage());

const otherStudent = new Student('Morris', new Date('2005/12/31'), student.generateRegistry());
console.log(otherStudent);


const order = new Order('Bruno', [{item: 'coxinha', price: 5}, {item: 'suco', price: 5}], 'dinheiro', 0.1);
console.log(order.getTotalConsumption());
console.log(order.getTotalConsumptionWithDiscount());

const testDate = new Data(29, 1, 1989);
  
console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
// const invalidDate = new Data(31, 2, 2021);

// console.log('Teste data inválida: ', invalidDate);

// formato inválido
// console.log(invalidDate.format('a m d'));

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);