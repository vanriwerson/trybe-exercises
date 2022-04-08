const searchEmployee = require('./searchEmployee');

describe('Testes relacionados à searchEmployee:', () => {
  it('Verificar se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  });
  it('Verificar se searchEmployee() retorna o valor esperado para cada caso', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('id: 4678-2, lastName: Dodds');
    expect(searchEmployee('1256-4', 'firstName')).toBe('id: 1256-4, firstName: Linda');
    expect(searchEmployee('5569-4', 'specialities')).toBe('id: 5569-4, specialities: Frontend,Redux,React,CSS');
  });
  it('Verificar se a mensagem "ID não identificada" é exibida ao informar um id inválido', () => {
    expect(searchEmployee('roxo', 'lastName')).toBe('ID não identificada');
  });
  it('Verificar se a mensagem "Informação indisponível" é exibida ao informar um detail inválido', () => {
    expect(searchEmployee('4678-2', 'roxo')).toBe('Informação indisponível');
  });
})
