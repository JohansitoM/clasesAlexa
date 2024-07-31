// 5. Gestión de una biblioteca
// Público: titulo, autor.
// Privado: disponible.
// Métodos:
// prestarLibro(): Este método deberá verificar si el libro está disponible antes de prestarlo.
// devolverLibro(): Este método deberá marcar el libro como disponible nuevamente.
// mostrarEstado(): Este método deberá acceder al atributo privado disponible para mostrar el
// estado del libro.
// Requerimientos:
//  Hacer que el atributo disponible sea privado.
//  Proveer un método mostrarEstado() que oculte la implementación del acceso a disponible.
//  Crear una subclase LibroDigital que extienda Libro y añada atributos como formato.
//  Sobrescribir el método mostrarEstado() en LibroDigital para incluir el formato.

// Abstraccion
class Biblioteca {
    constructor() {
        this.librosDisponibles = []
    }
    prestarLibro(titulo) {
        let libroT = this.librosDisponibles.find(libro => libro.titulo == titulo)
        if(libroT) {
            if (libroT.getDisponible()) {
                libroT.setDisponible(false)
                console.log(`Prestaste el libro ${libroT.titulo}`)
            } else if (libro.getDisponible() == false) {
                console.error(`El libro ${libroT.titulo} ya se encuentra prestado`)
            }
        } else {
            console.log(`No se encuentra el libro en la biblioteca`)
        }
    }

    devolverLibro(titulo) {
        let libroT = this.librosDisponibles.find(libro => libro.titulo == titulo)
        if (libroT) {
            if (libroT.getDisponible() == false) {
                libroT.setDisponible(true)
                console.log(`Haz devuelto el libro ${libroT.titulo}`)
            } else if (libroT.getDisponible() == true) {
                console.error(`El libro ${libroT.titulo} ya está en la biblioteca`)
            }
        } else {
            console.log(`Ese libro no pertenece a la biblioteca`)
        }
    }
    mostrarLibros() {
        this.librosDisponibles.forEach(libro => libro.getEstado())
    }
}
class Libro {
    // Encapsulamiento
    #disponible
    constructor(titulo, autor, disponible) {
        this.titulo = titulo
        this.autor = autor
        this.#disponible = disponible
    }
    getEstado() {
        console.log(`Libro:
        Titulo: ${this.titulo}
        Autor: ${this.autor}
        Disponible: ${this.#disponible ? 'Si' : 'No'}`)
    }
    getDisponible() {
        return this.#disponible
    }
    setDisponible(disponible) {
        this.#disponible = disponible
    }
}
// Herencia
class LibroDigital extends Libro {
    constructor(titulo, autor, disponible, formato) {
        super(titulo, autor, disponible)
        this.formato = formato
    }

    // Polimorfismo
    getEstado() {
        super.getEstado()
        console.log(`        Formato: ${this.formato}`)
    }
    
}

let libro1 = new Libro('Cien años de soledad', 'Gabriel Garcia Marquez', true)

let libro2 = new LibroDigital('Crónica de una muerte anunciada', 'Gabriel Garcia Marquez', true, 'PDF')

let biblioteca = new Biblioteca()

biblioteca.librosDisponibles.push(libro1)
biblioteca.librosDisponibles.push(libro2)
biblioteca.prestarLibro('Cien años de soledad')
biblioteca.devolverLibro('Cien años de soledad')

biblioteca.mostrarLibros()
