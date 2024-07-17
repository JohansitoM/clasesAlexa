import BateriaMix from "../mixins/bateriamix.js";
class VehiculoElectrico {
    constructor(nivelBateria) {
        this.nivelBateria = nivelBateria
        Object.assign(this, BateriaMix)
    }
}

export default VehiculoElectrico;