// 2. Creación de una agenda de contactos
// Público: nombre, apellido, teléfono, correo electrónico.
// Métodos:
// agregarContacto(): Este método deberá agregar un nuevo contacto a la agenda.
// editarContacto(): Este método deberá permitir editar la información de un contacto existente.
// eliminarContacto(): Este método deberá eliminar un contacto de la agenda.
// mostrarContactos(): Este método deberá mostrar todos los contactos de la agenda.
// Requerimientos:
//  Manejar la lista de contactos de manera privada.
//  Proveer métodos para agregar, editar, eliminar y mostrar contactos sin exponer
// directamente la estructura interna de almacenamiento.

// Abstraccion
class AgendaContactos {
    // Encapsulamiento
    #listaContactos
    constructor(propietario) {
        this.propietario = propietario
        this.#listaContactos = []
    }
    // Encapsulamiento
    agregarContacto(contacto) {
        this.#listaContactos.push(contacto)
    }
    // Encapsulamiento
    mostrarContactos() {
        this.#listaContactos.forEach(contacto => console.log(contacto))
    }
    // Encapsulamiento
    eliminarContacto(telefono) {
        let nuevaLista = this.#listaContactos.filter(contacto => contacto.telefono !== telefono)
        console.log(`Eliminaste el contacto de ${this.#listaContactos.find(contacto => contacto.telefono === telefono).nombre} ${this.#listaContactos.find(contacto => contacto.telefono === telefono).apellido} con el número de telefono ${telefono}`)
        this.#listaContactos = nuevaLista
    }
        // Encapsulamiento
    editarContacto(telefono, nuevoN, nuevoA, nuevoT, nuevoE) {
        let indiceContacto = this.#listaContactos.findIndex(contacto => contacto.telefono === telefono)
        console.log(`Editaste el contacto de ${this.#listaContactos[indiceContacto].nombre} ${this.#listaContactos[indiceContacto].apellido} con el número de telefono ${telefono}`)
        this.#listaContactos[indiceContacto] = new Contacto(nuevoN, nuevoA, nuevoT, nuevoE)
    }
}

class Contacto {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}

let agenda = new AgendaContactos('Johansit0')

let contacto1 = new Contacto('Patricia', 'Muñoz', 123456789, 'p@p.com')
let contacto2 = new Contacto('Roberto', 'Ramírez', 987654321, 'r@r.com')
let contacto3 = new Contacto('Elena', 'Torres', 135792468, 'e@e.com')   

agenda.agregarContacto(contacto1)
agenda.agregarContacto(contacto2)
agenda.agregarContacto(contacto3)
agenda.mostrarContactos()
agenda.eliminarContacto(123456789)
agenda.mostrarContactos()
agenda.editarContacto(987654321, 'Patricia', 'Muñoz', 123456789, 'p@p.com')
agenda.mostrarContactos()