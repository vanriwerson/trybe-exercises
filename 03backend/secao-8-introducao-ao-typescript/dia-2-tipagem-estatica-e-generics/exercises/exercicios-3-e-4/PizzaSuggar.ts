import Pizza from "./Pizza";
import { Sugar } from "./PizzaFlavorsTypes";

interface PizzaSuggar extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default PizzaSuggar;