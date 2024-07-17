import CombustibleMix from '../mixins/gasolinamix.js'
class VehiculoCombustion {
    constructor(nivelCombustible){
        this.nivelCombustible = nivelCombustible
        Object.assign(this, CombustibleMix)
    }
}

export default VehiculoCombustion;