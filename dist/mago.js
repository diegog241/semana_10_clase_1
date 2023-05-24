import { Personaje } from "./personaje.js";
export class Mago extends Personaje {
    constructor(poderMagico, nombre, nivel) {
        super(nombre, nivel);
        this.poderMagico = poderMagico;
    }
    lanzarHechizo() {
        const nivel_hechizo = this.poderMagico * this.nivel;
        console.log(`El mago ${this.nombre} está lanzando un hechizo de potencia ${nivel_hechizo}`);
    }
    atacar() {
        this.lanzarHechizo();
    }
}
