const sum = require('./sum');

describe('Verificar se a função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Verificar se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Verificar se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Verificar se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Verificar se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(/parameters must be numbers/);
  });
});
