import VehiculoCombustion from "./vehiculoCombustion.js";
import VehiculoElectrico from "./vehiculoElectrico.js";
class VehiculoHIbrido {
    constructor() {
        this.electrico1 = new VehiculoElectrico(50)
        this.combustion1 = new VehiculoCombustion(40)
    }

    mostrarEstado() {
            console.log(`El nivel de gasolina es de ${this.combustion1.nivelCombustible} y el de bateria de ${this.electrico1.nivelBateria}`)
    }
}

export default VehiculoHIbrido;