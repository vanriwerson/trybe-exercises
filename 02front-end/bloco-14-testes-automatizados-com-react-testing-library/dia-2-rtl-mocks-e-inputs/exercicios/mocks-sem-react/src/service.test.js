const { test } = require('@jest/globals');
const service = require('./service');

describe("Testes da função generateRandomNumber", () => {
  test("Testando se a função retorna o valor mockado '10'", () => {
    // Mockando o retorno da função para 10
    service.generateRandomNumber = jest.fn().mockReturnValue(10);
    // Verificando se a função retorna o valor mockado
    expect(service.generateRandomNumber()).toBe(10);
    // Verificando se a função foi chamada
    expect(service.generateRandomNumber).toHaveBeenCalled();
    // Verificando se a função foi chamada apenas uma vez
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
  
  test("Alterando a implementação através do mock para receber 2 parâmetros e retornar sua divisão", () => {
    // Mudando a implementação (apenas uma vez)
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    // Testando se a função retorna o valor esperado
    expect(service.generateRandomNumber(21, 3)).toBe(7);
    // Verificando se a função foi chamada
    expect(service.generateRandomNumber).toHaveBeenCalled();
    // Verificando se a função foi chamada apenas uma vez
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    // Verificando se a função foi chamada com os parâmetros corretos
    expect(service.generateRandomNumber).toHaveBeenCalledWith(21, 3);
  });
  
  test("Alterando a implementação através do mock para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(service.generateRandomNumber(3, 5, 4)).toBe(60);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(3, 5, 4);
  });
  
  test("Alterando a implementação através do mock para receber um parâmetro e retornar seu dobro", () => {
    // Faz o reset da implementação anterior
    service.generateRandomNumber.mockReset();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(0);
  
    service.generateRandomNumber.mockImplementation(a => a * 2);
  
    expect(service.generateRandomNumber(5)).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(5);
  });
});

describe("Testes das funções convertToUpperCase, returnFirstChar, concatTwoStrings.", ()=> {
  test("Mockando convertToUpperCase para receber um parâmetro e retornar em caixa baixa", () => {
    const mockconvertToUpperCase = jest.spyOn(service, "convertToUpperCase" ).mockImplementation(a => a.toLowerCase());

    expect(mockconvertToUpperCase("UPPERCASE")).toBe("uppercase");
    expect(service.convertToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.convertToUpperCase).toHaveBeenCalledWith("UPPERCASE");
  });

  test("Mockando returnFirstChar para receber um parâmetro e retornar a última letra", () => {
    const mockreturnFirstChar = jest.spyOn(service, "returnFirstChar").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockreturnFirstChar("Riwerson")).toBe("n");
    expect(service.returnFirstChar).toHaveBeenCalledTimes(1);
    expect(service.returnFirstChar).toHaveBeenCalledWith("Riwerson");
  });

  test("Mockando concatTwoStrings para que receba 3 parâmetros e os concatene", () => {
    const mockconcatTwoStrings = jest.spyOn(service, "concatTwoStrings").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockconcatTwoStrings("Ri", "wer", "son")).toBe("Riwerson");
    expect(service.concatTwoStrings).toHaveBeenCalledTimes(1);
    expect(service.concatTwoStrings).toHaveBeenCalledWith("Ri", "wer", "son");
  });

  test("restaurando convertToUpperCase e verificando se ela retorna em caixa alta", () => {
    service.convertToUpperCase.mockRestore();
    expect(service.convertToUpperCase("palavra")).toBe("PALAVRA");
  })
});

describe("Testes da função fetchDogPicture", () => {
  // Resetando a requisição após cada teste
  service.fetchDogPicture = jest.fn();
  afterEach(service.fetchDogPicture.mockReset);

  test("Testando requisição caso a promise resolva", async () => {
    service.fetchDogPicture.mockResolvedValue("request success");

    service.fetchDogPicture();
    expect(service.fetchDogPicture).toHaveBeenCalled();
    expect(service.fetchDogPicture).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogPicture()).resolves.toBe("request success");
    expect(service.fetchDogPicture).toHaveBeenCalledTimes(2);
  });

  test("Testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDogPicture.mockRejectedValue("request failed");

    expect(service.fetchDogPicture).toHaveBeenCalledTimes(0);
    await expect(service.fetchDogPicture()).rejects.toMatch("request failed");
    expect(service.fetchDogPicture).toHaveBeenCalledTimes(1);
  });
});
