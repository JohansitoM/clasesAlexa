// 7. Desarrollo de un sistema de gestión de empleados
// Público: nombre, apellido, cargo.
// Privado: salario.
// Métodos:
// calcularSueldoNeto(): Este método deberá implementar la lógica para calcular el sueldo neto en base al salario y las deducciones correspondientes.
// mostrarDatos(): Este método deberá acceder al atributo privado salario para mostrar los datos
// completos del empleado.
// Requerimientos:
//  Hacer que el atributo salario sea privado.
//  Proveer un método mostrarDatos() que oculte la implementación del acceso a salario.

class Empleado {
    // Encapsulamiento
    #salario
    constructor(nombre, cargo, salario){
        this.nombre = nombre
        this.cargo = cargo
        this.#salario = salario
    }
    getSalario(){
        return this.#salario
    }
    setSalario(salario){
        this.#salario = salario
    }

    calcularSueldoNeto(){
        this.sueldoNeto = this.#salario - (this.#salario * 0.15)
    }
    // Encapsulamiento
    mostrarDatos(){
        console.log(`
            Nombre: ${this.nombre} 
            Cargo: ${this.cargo} 
            Salario: ${this.getSalario()}
            Sueldo Neto: ${this.sueldoNeto}`)
    }
}

let empleado1 = new Empleado('Patricia', 'Gerente', 2000)
empleado1.calcularSueldoNeto()
empleado1.mostrarDatos()