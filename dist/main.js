import { Arquero } from "./arquero.js";
import { Mago } from "./mago.js";
import { Guerrero } from "./guerrero.js";
const arquero = new Arquero(10, 'Legolas', 50);
console.log(arquero instanceof Mago);
console.log(new Mago(60, 'Mago x', 60).atacar());
console.log(new Guerrero(35, 'guerrero', 20).atacar());
