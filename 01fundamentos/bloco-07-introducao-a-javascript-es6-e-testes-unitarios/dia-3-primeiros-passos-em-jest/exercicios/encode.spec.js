const encode = require('./encode');
const decode = require('./decode');

describe('Verificar se encode e decode são funções', () => {
  it('Verificar se o typeof de encode e decode retorna "function"', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
});

describe('Verificar se na função encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  it('Verificar se a vogal "a" é convertida em 1', () => {expect(encode('a')).toBe('1')});
  it('Verificar se a vogal "e" é convertida em 2', () => {expect(encode('e')).toBe('2')});
  it('Verificar se a vogal "i" é convertida em 3', () => {expect(encode('i')).toBe('3')});
  it('Verificar se a vogal "o" é convertida em 4', () => {expect(encode('o')).toBe('4')});
  it('Verificar se a vogal "u" é convertida em 5', () => {expect(encode('u')).toBe('5')});
});

describe('Verificar se na função decode os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
  it('Verificar se o número 1 é convertido na vogal "a"', () => {expect(decode('1')).toBe('a')});
  it('Verificar se o número 2 é convertido na vogal "e"', () => {expect(decode('2')).toBe('e')});
  it('Verificar se o número 3 é convertido na vogal "i"', () => {expect(decode('3')).toBe('i')});
  it('Verificar se o número 4 é convertido na vogal "o"', () => {expect(decode('4')).toBe('o')});
  it('Verificar se o número 5 é convertido na vogal "u"', () => {expect(decode('5')).toBe('u')});
});

describe('Verificar se as demais letras e números não são convertidos em "encode" e "decode"', () => {
  it('Verificar se a string "bcd678" não é alterada por encode', () => {expect(encode('bcd678')).toBe('bcd678')});
  it('Verificar se a string "bcd678" não é alterada por decode', () => {expect(decode('bcd678')).toBe('bcd678')});
});

describe('Verificar se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
  it('Verificar se encode("Bruno") retorna o length 5', () => {expect(encode('Bruno').length).toBe(5)});
  it('Verificar se decode("Bruno") retorna o length 5', () => {expect(decode('Bruno').length).toBe(5)});
});
