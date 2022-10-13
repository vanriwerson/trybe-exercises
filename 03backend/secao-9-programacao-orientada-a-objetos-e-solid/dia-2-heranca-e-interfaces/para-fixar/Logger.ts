interface Logger {
  log(str: string): void;
}

class ConsoleLogger implements Logger {
  log(str: string): void {
    console.log(str);
  }
}

class ConsoleLogger2 implements Logger {
  log(str: string): void {
    console.log(`Recebido de ConsoleLogger2: ${str}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(
    public logger: Logger = new ConsoleLogger()
  ){}

  save(key: string, value: string): void {
    this.logger.log(`Valor ${value} salvo na chave ${key}.`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('comida', 'coxinha');
database2.save('bebida', 'suco');
database3.save('sobremesa', 'sorvete');
