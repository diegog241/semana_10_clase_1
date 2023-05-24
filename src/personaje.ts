export abstract class Personaje {
    nombre:string
    nivel:number

    constructor(nombre:string, nivel:number){
        this.nombre = nombre
        this.nivel = nivel
    }

    abstract atacar():void
}