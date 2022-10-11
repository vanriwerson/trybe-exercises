// On root directory:
// setup: npm install -D typescript ts-node-dev
// compile: npx tsc para-fixar/TV.ts
// run: node para-fixar/TV.js

export default class TV {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: string, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  private getAttributes = () => {
    return {
      brand: this._brand,
      size: this._size,
      resolution: this._resolution,
      connections: this._connections,
    }
  }
  
  getConnection = () => {
    return this._connectedTo;
  }

  setConnection = (connectTo: string) => {
    const isValidConnection = this._connections.some((conn) => conn === connectTo);

    if (isValidConnection) {
      this._connectedTo = connectTo
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  public turnOn() {
    const { brand, size, resolution, connections } = this.getAttributes();
    console.log(brand, size, resolution, connections);
  }
}

const myOldAndGoodTV = new TV('Samsung', '32"', '1920 x 1080', ['HDMI', 'AVI', 'USB']);
myOldAndGoodTV.turnOn();

myOldAndGoodTV.setConnection('xablau');

myOldAndGoodTV.setConnection('HDMI');
console.log(myOldAndGoodTV.getConnection());
