// 9. Implementación de un sistema de reservas de hotel
// Público: nombreCliente, fechaReserva.
// Privado: habitacionAsignada.
// Métodos:
// reservarHabitacion(): Este método deberá asignar una habitación disponible al cliente.
// cancelarReserva(): Este método deberá cancelar la reserva del cliente.
// mostrarReserva(): Este método deberá acceder al atributo privado habitacionAsignada para
// mostrar los detalles de la reserva.
// Requerimientos:
//  Hacer que el atributo habitacionAsignada sea privado.
//  Proveer un método mostrarReserva() que oculte la implementación del acceso a
// habitacionAsignada.

class Reserva {
    // Encapsulamiento
    #habitacionAsignada
    constructor(cliente, fecha) {
        this.cliente = cliente
        this.fecha = fecha
        this.#habitacionAsignada
    }
    // Metodos
    reservarHabitacion() {
        this.habitacionAsignada = 'Habitacion disponible'
    }
    cancelarReserva() {
        this.habitacionAsignada = 'Habitacion no disponible'
    }
    mostrarReserva() {
        console.log(`La habitacion asignada es ${this.habitacionAsignada}`)
    }
}  

class Hotel {
    constructor(cliente, fecha) {
        this.cliente = cliente
        this.fecha = fecha
    }
    // Metodos
    reservarHabitacion() {
        this.habitacionAsignada = 'Habitacion disponible'
    }
    cancelarReserva() {
        this.habitacionAsignada = 'Habitacion no disponible'
    }
    mostrarReserva() {
        console.log(`La habitacion asignada es ${this.habitacionAsignada}`)
    }
}