import Order from "./Order";
import Student from "./Student";
import Data from "./Date";

const student = new Student('01ADS11102022', 'Bruno', [5, 6, 7, 8], [9, 10]);
console.log(student.getGradesSum());
console.log(student.getAverage());

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
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// formato inválido
console.log(invalidDate.format('a m d'));
