const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã"
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos"
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite"
};

// 1.Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const mudarTurno = (destiny, key, value) => {
  destiny[key] = value;
};

mudarTurno(lesson2, "turno", "noite");
console.log(lesson2);

// 2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectKeys = (obj) => Object.keys(obj);
console.log(listObjectKeys(lesson1));

// 3.Crie uma função para mostrar o tamanho de um objeto.
const showObjectLength = (obj) => Object.keys(obj).length;
console.log(showObjectLength(lesson3));

// 4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (obj) => Object.values(obj);
console.log(listObjectValues(lesson2));

// 5.Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};
console.log(allLessons); // Gabarito: const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function sumStudents(obj) {
  sum = 0;
  const objectKeys = Object.keys(obj);
  for (let i = 0; i < objectKeys.length; i += 1) {
    sum += obj[objectKeys[i]][1];
  }
  return sum;
}
console.log(sumStudents(allLessons)); // Expected 50;

// 7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByIndex = (obj, index) => {
  const keys = Object.keys(obj);
  const value = obj[keys[index]];
  return value
};

console.log(getValueByIndex(lesson1, 0));

// 8.Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyEntries = (obj, key, value) => {
  let matches = false;
  const entries = Object.entries(obj);
  for (let i in entries) {
    if(entries[i][0] === key && entries[i][1] === value) {
      matches = true;
    }
  }
  return matches;
}

console.log(verifyEntries(lesson3, 'turno', 'noite')); // Expected true;
console.log(verifyEntries(lesson3, 'materia', 'Maria Clara')); // Expected false;
