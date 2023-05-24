import { Personaje } from "./personaje.js";

export class Mago extends Personaje{
    poderMagico:number

    constructor(poderMagico:number, nombre:string, nivel:number) {
        super(nombre, nivel)
        this.poderMagico = poderMagico
    }

    lanzarHechizo() {
        const nivel_hechizo = this.poderMagico * this.nivel
        console.log(`El mago ${this.nombre} está lanzando un hechizo de potencia ${nivel_hechizo}`)
    }

    atacar(): void {
        this.lanzarHechizo()
    }
}