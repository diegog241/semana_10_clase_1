import { Personaje } from "./personaje.js";

export class Guerrero extends Personaje{
    fuerza:number

    constructor(fuerza:number, nombre:string, nivel:number) {
        super(nombre, nivel)
        this.fuerza = fuerza
    }

    usarEspada() {
        const fuerza_ataque = this.fuerza * this.nivel
        console.log(`El guerrero ${this.nombre} está usando su espada con una fuerza de ${fuerza_ataque}`)
    }

    atacar(): void {
        this.usarEspada()
    }
}