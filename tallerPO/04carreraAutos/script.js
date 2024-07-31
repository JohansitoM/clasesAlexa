// 4. Simulación de una carrera de autos
// Público: marca, modelo.
// Privado: velocidadMáxima, combustibleActual.
// Métodos:
// acelerar(): Este método deberá verificar el combustible actual antes de aumentar la velocidad.
// frenar(): Este método deberá reducir la velocidad del auto.
// recargarCombustible(): Este método deberá aumentar el combustible actual del auto.
// mostrarEstado(): Este método deberá acceder a los atributos privados velocidadMáxima y combustibleActual para mostrar el estado del auto.
// Requerimientos:
//  Hacer que los atributos velocidadMáxima y combustibleActual sean privados.
//  Proveer un método mostrarEstado() que oculte la implementación del acceso a velocidadMáxima y combustibleActual.


class Auto {
    // Encapsulamiento
    #velocidadMaxima
    #combustibleActual
    constructor(marca, modelo, velocidadMax, combustibleActual) {
        this.marca = marca
        this.modelo = modelo
        this.#velocidadMaxima = velocidadMax
        this.#combustibleActual = combustibleActual
        this.velocidadActual = 0
    }
    acelerar(km) {
        if (this.#combustibleActual <= 10) {
            console.error("No tienes suficiente combustible para acelerar")
        } else {
            this.#combustibleActual -= 5
            this.velocidadActual += km
            console.log(`Aceleraste a ${km}Km/h`)
        }
    }
    frenar(km) {
        this.velocidadActual -= km
        console.log(`Desaceleraste ${km} Km/h`)
    }
    recargarCombustible(cantidad) {
        if (this.#combustibleActual >= 100) {
            console.log(`No puedes recargar porque ya tienes el maximo de combustible`)
        } else if (this.#combustibleActual < 100) {
            if(this.#combustibleActual + cantidad > 100) {
                this.#combustibleActual = 100
            } else {
                this.#combustibleActual += cantidad
            }
        }
        console.log(`Has recargado ${cantidad} litros de gasolina`)
    }
    // Encapsulamiento
    mostrarEstado() {
        console.log(`Auto:
        Marca: ${this.marca} 
        Modelo: ${this.modelo}
        Velocidad maxima: ${this.#velocidadMaxima}
        Combustible: ${this.#combustibleActual}
        Velocidad Actual: ${this.velocidadActual}`)
    }
}

let auto = new Auto("Chevrolet", "Camaro", 200, 100)

auto.acelerar(40)
auto.acelerar(5)
auto.acelerar(5)
auto.mostrarEstado()

auto.frenar(10)
auto.frenar(10)

auto.recargarCombustible(5)
auto.mostrarEstado()    
