const CombustibleMix = {
    llenarTanque() {
        this.nivelCombustible += 10
    },
    usarCombustible() {
        this.nivelCombustible -= 10
    }
}

export default CombustibleMix;