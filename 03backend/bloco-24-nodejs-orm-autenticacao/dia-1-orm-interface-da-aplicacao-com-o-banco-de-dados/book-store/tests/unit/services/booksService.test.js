const { expect } = require('chai');
const sinon = require('sinon');

const { book } = require('../../models');
const { booksService } = require('../../../src/services');
const { getAllResponse } = require('../../mocks/books.mock');

describe('Testes de booksService', function () {
  describe('O método getAll deve', function () {
    const findAllStub = sinon.stub(book, 'findAll');
    let books;

    describe('quando não há livros cadastrados', function () {
      before(async () => {
        findAllStub.resolves([]);
        books = booksService.getAll();
      });
  
      after(() => {
        findAllStub.restore();
      });

      it('chamar o método book.findAll', () => {
        expect(book.findAll.calledOnce).to.be.equals(true);
      });

      it('retornar um array vazio', () => {
        expect(books).to.be.an('array');
        expect(books).to.be.empty;
      });
    });

    describe('quando há livros cadastrados', function () {
      before(async () => {
        findAllStub.resolves(getAllResponse);
        books = booksService.getAll();
      });
  
      after(() => {
        findAllStub.restore();
      });

      it('chamar o método book.findAll', () => {
        expect(book.findAll.calledOnce).to.be.equals(true);
      });

      it('retornar um array de objetos', () => {
        expect(books).to.be.an('array');
        expect(books).to.be.deep.equal(getAllResponse);
      });
    });
  });
})