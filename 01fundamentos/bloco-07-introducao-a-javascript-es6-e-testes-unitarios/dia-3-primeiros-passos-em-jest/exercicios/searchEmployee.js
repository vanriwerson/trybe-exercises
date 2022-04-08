// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  for (let info in professionalBoard) {
    if (professionalBoard[info].id === id) {
      if (professionalBoard[info][detail] === undefined) {
        return 'Informação indisponível';
      }
      return `id: ${professionalBoard[info].id}, ${detail}: ${professionalBoard[info][detail]}`
    }
  }

  if(professionalBoard.indexOf(id) === -1) {
    return 'ID não identificada';
  }
};

console.log(searchEmployee('4678-2', 'firstName'));
console.log(searchEmployee('4678-2', 'roxo'));
console.log(searchEmployee('roxo', 'lastName'));
module.exports = searchEmployee;
