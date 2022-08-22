const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const fs = require("fs");

const app = require("../../src/app");
const mockFile = require("../mocks/mockCacaoTrybeDB");

const { expect } = chai;

chai.use(chaiHttp);

describe("Testando a API Cacao Trybe", function () {
  beforeEach(function () {
    sinon.stub(fs.promises, "readFile").resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe("Usando o método GET em /chocolates", function () {
    it("Retorna a lista completa de chocolates!", async function () {
      const response = await chai.request(app).get("/chocolates");

      expect(response.status).to.be.equal(200);

      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];

      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe("Usando o método GET em /chocolates/:id para buscar o ID 4", function () {
    it("Retorna o chocolate Mounds", async function () {
      const response = await chai.request(app).get("/chocolates/4");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: "Mounds",
          brandId: 3,
        },
      ]);
    });
  });

  describe("Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1", function () {
    it("Retorna os chocolates da marca Lindt & Sprungli", async function () {
      const response = await chai.request(app).get("/chocolates/brand/1");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: "Mint Intense",
          brandId: 1,
        },
        {
          id: 2,
          name: "White Coconut",
          brandId: 1,
        },
      ]);
    });
  });

  describe("Usando o método GET em /chocolates/total", function () {
    it("Retorna a quantidade de chocolates na base de dados", async function () {
      const response = await chai.request(app).get("/chocolates/total");

      const output = {
        totalChocolates: 4
      };

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates que contém "Mo" no nome', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);

      const output = [
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ];

      expect(response.body).to.deep.equal(output);
    });

    it('Retorna um array vazio caso não encontre nenhum chocolate', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=xablau');

      const NOT_FOUND = 404;

      expect(response.status).to.be.equal(NOT_FOUND);
      expect(response.body).to.deep.equal([]);
    });
  });
});
