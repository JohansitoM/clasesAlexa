// Una empresa de almacenamiento de granos, debe mantener actualizada la cantidad de cada grano almacenada en sus silos, el tipo de grano almacenado y el cliente dueño del grano, para tal fin desea una clase (de nombre “silos”). Se debe calcular el precio a cobrar, a los clientes. Según los siguientes criterios: Los granos tienen un costo básico que depende del número de días de almacenamiento, y, la época del año, si es de enero a junio se cobra 15000 pesos más, si es de Julio a diciembre se cobra 25000 más.

class Silos{
    constructor(tipoGrano, cantidad, cliente, diasAlmacenamiento, mesInicio){
        this.tipoGrano = tipoGrano
        this.cantidad = cantidad
        this.cliente = cliente
        this.diasAlmacenamiento = diasAlmacenamiento
        this.mesInicio = mesInicio

        this.costoBasicoPorDia = 3000
    }
    
    calcularPrecio() {
        let costoBasico = this.diasAlmacenamiento * this.costoBasicoPorDia
        let adicional

        if (this.mesInicio >= 1 && this.mesInicio <= 6) {
            adicional = 15000
        } else if (this.mesInicio >= 7 && this.mesInicio <= 12) {
            adicional = 25000
        }
    
        this.precioTotal = costoBasico + adicional
        console.log(`El precio de almacenamiento es: ${this.precioTotal} pesos`)
    }
}

const silo = new Silos("trigo", 1000, "Johansit0", 30, 5)
silo.calcularPrecio()