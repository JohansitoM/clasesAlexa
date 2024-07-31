// 1. Gestión de una biblioteca de música
// Público: titulo, artista.
// Privado: duración.
// Métodos:
//  agregarCancion(): Este método deberá agregar una canción a la biblioteca.
//  eliminarCancion(): Este método deberá eliminar una canción de la biblioteca.
//  mostrarDetalles(): Este método deberá acceder al atributo privado duración para mostrar
// la información completa de la canción.
// Requisitos:
//  Hacer que el atributo duración sea privado.
//  Proveer un método mostrarDetalles() que oculte la implementación del acceso a duración.

// Abstracción
class BibliotecaCanciones{
    constructor(nombre){
        this.nombre = nombre
        this.canciones = []
    }
    agregarCancion(cancion){
        this.canciones.push(cancion)
    }

    eliminarCancion(nombreCancion) {
        let nuevasCanciones = this.canciones.filter(cancion => cancion.titulo !== nombreCancion)
        this.canciones = nuevasCanciones
        console.log(`Eliminaste ${nombreCancion} de la biblioteca`)
    }
    mostraListaCanciones() {
        this.canciones.forEach(cancion => cancion.mostrarDetalles())
    }
}

class Cancion {
    titulo
    artista
    // Encapsulamiento
    #duracion
    constructor(titulo, artista, duracion) {
        this.titulo = titulo
        this.artista = artista
        this.#duracion = duracion
    }
    // Encapsulamiento
    mostrarDetalles() {
        console.log(`Canción
            Titulo: ${this.titulo}
            Artista: ${this.artista}
            Duración: ${this.#duracion}`)
    }
}

let biblioteca = new BibliotecaCanciones('Colección de Johansit0')

let cancion1 = new Cancion('RATATATA', 'BABY METAL & Electric Callboy', 216)
let cancion2 = new Cancion('CHIHIRO', 'Billie Eilish', 304)
let cancion3 = new Cancion('LOST AND FOUND', 'ONE OK ROCK', 183)
let cancion4 = new Cancion('SICKO MODE', 'Travis Scott', 243)

biblioteca.agregarCancion(cancion1)
biblioteca.agregarCancion(cancion2)
biblioteca.agregarCancion(cancion3)
biblioteca.agregarCancion(cancion4)

biblioteca.mostraListaCanciones()

biblioteca.eliminarCancion('SICKO MODE')

biblioteca.mostraListaCanciones()