import { Personaje } from "./personaje.js";

export class Arquero extends Personaje{
    precision:number

    constructor(precision:number, nombre:string, nivel:number) {
        super(nombre, nivel)
        this.precision = precision
    }

    private dispararFlecha() {
        const nivel_precision = this.precision * this.nivel
        console.log(`El arquero ${this.nombre} está lanzando una flecha con una precisión de ${nivel_precision}`)
    }

    atacar(): void {
        this.dispararFlecha()
    }
}