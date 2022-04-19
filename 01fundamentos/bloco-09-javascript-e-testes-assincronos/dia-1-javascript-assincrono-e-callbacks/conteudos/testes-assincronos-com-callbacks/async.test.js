// FALSO POSITIVO:
// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// FALHA POR TIMEOUT:
// test('Não deveria passar!', (done) => { // done é uma callback do Jest
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// FALSO POSITIVO (não foi especificada nenhuma ação para o caso de ocorrer um erro):
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // com apenas done(), o teste gera um falso positivo;
    }
  }, 500);
});
