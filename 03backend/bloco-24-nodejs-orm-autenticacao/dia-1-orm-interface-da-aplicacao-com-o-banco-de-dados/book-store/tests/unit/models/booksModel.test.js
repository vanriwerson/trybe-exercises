// instalar os test-helpers do sequelize: npm i sequelize-test-helpers
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const bookSchema = require('../../../src/models/books.model');

describe('O model de book', () => {
  const Book = bookSchema(sequelize, dataTypes);
  const testBook = new Book();

  describe('possui o nome "book"', () => {
    checkModelName(Book)('book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(testBook));
  });
});