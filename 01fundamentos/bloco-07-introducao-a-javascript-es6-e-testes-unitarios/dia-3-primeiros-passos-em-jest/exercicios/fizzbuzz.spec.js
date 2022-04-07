const myFizzBuzz = require('./fizzbuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Verifique se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verifique se myFizzBuzz(9) retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Verifique se myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Verifique se myFizzBuzz(8) retorna 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('Verifique se myFizzBuzz("8") retorna false', () => {
    expect(myFizzBuzz('8')).toBeFalsy();
  });
})

