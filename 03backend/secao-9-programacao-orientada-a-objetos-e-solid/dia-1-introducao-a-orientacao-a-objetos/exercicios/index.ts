import Order from "./Order";
import Student from "./Student";

const student = new Student('01ADS11102022', 'Bruno', [5, 6, 7, 8], [9, 10]);
console.log(student.getGradesSum());
console.log(student.getAverage());

const order = new Order('Bruno', [{item: 'coxinha', price: 5}, {item: 'suco', price: 5}], 'dinheiro', 0.1);
console.log(order.getTotalConsumption());
console.log(order.getTotalConsumptionWithDiscount());
