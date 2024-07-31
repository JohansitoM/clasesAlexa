// 8. Simulación de un juego de cartas
// Público: palo, valor.
// Privado: baraja, jugadores.
// Métodos:
// barajar(): Este método deberá mezclar las cartas en la baraja.
// repartir(): Este método deberá distribuir las cartas a los jugadores.
// jugar(): Este método deberá iniciar una ronda de juego.
// mostrarMano(): Este método deberá mostrar la mano actual de un jugador.
// Requerimientos:
//  Hacer que los atributos baraja y jugadores sean privados.
//  Proveer métodos que oculten la implementación de las acciones del juego.
//  Crear subclases para diferentes tipos de juegos de cartas.
//  Implementar métodos de juego específicos en las subclases que sobrescriban los métodos
// de la clase base.

class juegoCartas {
    #mano
    #jugadores
    constructor(mano, jugadores) {
        this.#mano = baraja
        this.#jugadores = [jugadores]
    }
}

class Cartas {
    constructor(simbolo) {
        this.paloCartas = []
    }
    crearPalo(simbolo) {
        for(let j = 1; j <= 10; j++) {
            this.paloCartas.push({palo: this.simbolo, valor: j})
        }
        this.paloCartas.push({palo: simbolo, valor: 'J'})
        this.paloCartas.push({palo: simbolo, valor: 'Q'})
        this.paloCartas.push({palo: simbolo, valor: 'K'})
    }
    mostrarPalo() {
        for(let i = 0; i < this.paloCartas.length; i++) {
            console.log(`${this.paloCartas[i].palo} - ${this.paloCartas[i].valor}`)
        }
    }
}

class Jugadores {
    #nombre
    #manoJugador
    constructor(nombre, manoJugador) {
        this.#nombre = nombre
        this.#manoJugador = manoJugador
    }
}

let paloPicas = new Palo('♠')
paloPicas.crearPalo()
paloPicas.mostrarPalo()
let paloDiamantes = new Palo('♦')
paloDiamantes.crearPalo()
paloDiamantes.mostrarPalo()
let paloCorazones = new Palo('♥')
paloCorazones.crearPalo()
paloCorazones.mostrarPalo()
let paloTreboles = new Palo('♣')
paloTreboles.crearPalo()
paloTreboles.mostrarPalo()