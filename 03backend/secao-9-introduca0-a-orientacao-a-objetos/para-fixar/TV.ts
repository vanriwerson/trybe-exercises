export default class TV {
  brand: string;
  size: string;
  resolution: string;
  connections: string[];

  constructor(brand: string, size: string, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  connectedTo() {
    console.log(`Conectado à: ${this.connections[0]}`);
  }

  public turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const myOldAndGoodTV = new TV('Samsung', '32"', '1920 x 1080', ['AVI', 'HDMI']);
myOldAndGoodTV.connectedTo();
myOldAndGoodTV.turnOn();