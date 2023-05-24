import { Personaje } from "./personaje.js";
export class Arquero extends Personaje {
    constructor(precision, nombre, nivel) {
        super(nombre, nivel);
        this.precision = precision;
    }
    dispararFlecha() {
        const nivel_precision = this.precision * this.nivel;
        console.log(`El arquero ${this.nombre} está lanzando una flecha con una precisión de ${nivel_precision}`);
    }
    atacar() {
        this.dispararFlecha();
    }
}
