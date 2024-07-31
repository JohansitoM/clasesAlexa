// 3. Modelado de una cuenta bancaria
// Público: nombreTitular, saldo.
// Privado: tipoCuenta.
// Métodos:
// depositar(): Este método deberá aumentar el saldo de la cuenta.
// retirar(): Este método deberá verificar el saldo y el tipo de cuenta antes de realizar la operación y disminuir el saldo si es posible.
// consultarSaldo(): Este método deberá mostrar el saldo actual de la cuenta.
// mostrarInformación(): Este método deberá acceder al atributo privado tipoCuenta para mostrar la información completa de la cuenta.
// Requerimientos:
//  Hacer que el atributo tipoCuenta sea privado.
//  Proveer un método mostrarInformación() que oculte la implementación del acceso a
// tipoCuenta.

class CuentaBancaria {
    // Encapsulamiento
    #tipoCuenta
    constructor(nombreTitular, saldo) {
        this.nombreTitular = nombreTitular
        this.saldo = saldo
        this.#tipoCuenta = 'Ahorros'
    }

    depositar(monto) {
        this.saldo += monto
        console.log(`Has depositado ${monto} a tu cuenta `)
    }
    retirar(monto) {
        if(this.saldo < monto) {
            console.error('No tienes suficiente saldo')
        } else {
            this.saldo -= monto
            console.log(`Has retirado ${monto} de tu cuenta`)
        }
    }
    consultarSaldo() { 
        console.log(`El saldo disponible en tu cuenta es de ${this.saldo}`)
    }
    // Encapsulamiento
    mostrarInformacion() {
        console.log(`Cuenta: ${this.#tipoCuenta}
        Titular: ${this.nombreTitular}
        Saldo: ${this.saldo}`)
    }
}

let cuenta1 = new CuentaBancaria('Johansit0', 100)

cuenta1.depositar(100)
cuenta1.retirar(50)
cuenta1.consultarSaldo()
cuenta1.mostrarInformacion()