// Exercício 9:

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(erro, resultado) {
      expect(erro).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Eevee', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(erro, resultado) {
      expect(resultado).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});