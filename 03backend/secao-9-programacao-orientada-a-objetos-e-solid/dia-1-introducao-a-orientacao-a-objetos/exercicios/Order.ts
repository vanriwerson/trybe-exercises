class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

interface Consumption {
  item: string,
  price: number,
}

export default class Order extends Client {
  private _consumption: Consumption[];
  private _payMethod: string;
  private _discount?: number;

  constructor(name: string, consumption: Consumption[], payMethod: string, discount?: number) {
    super(name)
    this._consumption = consumption;
    this._payMethod = payMethod;
    this._discount = discount;
  }

  getTotalConsumption = (): number => {
    const totalConsumption = this._consumption.reduce((acc, curr) => acc + curr.price, 0)

    return totalConsumption;
  }

  getTotalConsumptionWithDiscount = (): number => {
    const totalConsumption = this.getTotalConsumption();

    if (this._discount && this._payMethod === 'dinheiro') {
      return totalConsumption * (1 - this._discount);
    }

    return totalConsumption;
  }
}