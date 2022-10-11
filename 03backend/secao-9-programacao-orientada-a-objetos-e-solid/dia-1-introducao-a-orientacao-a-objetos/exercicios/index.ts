import Student from "./Student";

const student = new Student('01ADS11102022', 'Bruno', [5, 6, 7, 8], [9, 10]);
console.log(student.getGradesSum());
console.log(student.getAverage());