// 10. Sistema de gestión de proyectos
// Público: nombreProyecto, fechaInicio, fechaFin.
// Privado: estado.
// Métodos:
// iniciarProyecto(): Este método deberá cambiar el estado del proyecto a &quot;en progreso&quot;.
// finalizarProyecto(): Este método deberá cambiar el estado del proyecto a &quot;completado&quot;.
// mostrarEstado(): Este método deberá acceder al atributo privado estado para mostrar el estado
// actual del proyecto.
// Requerimientos:
//  Hacer que el atributo estado sea privado.
//  Proveer un método mostrarEstado() que oculte la implementación del acceso a estado.

class Proyecto {
    // Encapsulamiento
    #estado
    constructor(nombreP, fechaI, fechaF) {
        this.nombreP = nombreP
        this.fechaI = fechaI
        this.fechaF = fechaF
        this.#estado;
    }

    getEstado() {
        return this.#estado
    }

    setEstado(estado) {
        this.#estado = estado
    }

    iniciarProyecto() {
        this.setEstado('en progreso')
    }

    finalizarProyecto() {
        this.setEstado('completado')
    }

    mostrarEstado() {
        console.log(`El estado del proyecto es ${this.getEstado()}`)
    }
}

let proyecto1 = new Proyecto('Puente', '2022-01-01', '2022-12-31')
proyecto1.iniciarProyecto()
proyecto1.mostrarEstado()
proyecto1.finalizarProyecto()
proyecto1.mostrarEstado()