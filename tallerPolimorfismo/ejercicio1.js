class Tools{
    constructor(nombre) {
        this.nombre = nombre
    }
    estado() {
        return "Las herramientas son necesarias para tareas de mantenimiento"
    }
}

class ElectricTools extends Tools{
    constructor(nombre) {
        super(nombre)
    }
    estado() {
        return "Las herramientas eléctricas o electrónicas son de alta precisión"
    }

    estadoPapi(){
        return super.estado()
    }

}

class MechanicTools extends Tools{
    constructor(nombre) {
        super(nombre)
    }
    estado() {
        return "Las herramientas mecánicas son básicas y manejables"
    }

    estadoPapi(){
        return super.estado()
    }
}

let herramienta = new Tools('Martillo')
console.log(herramienta.estado())

let herramientaM = new MechanicTools('Serrucho')
console.log(herramientaM.estado())
console.log(herramientaM.estadoPapi())

let herramientaE = new ElectricTools('Pulidora')
console.log(herramientaE.estado())
console.log(herramientaE.estadoPapi())