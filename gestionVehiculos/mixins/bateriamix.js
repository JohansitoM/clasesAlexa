const BateriaMix = {
    cargarBateria() {
        this.nivelBateria += 10
    },

    usarBateria() {
        this.nivelBateria -= 10
    }
}

export default BateriaMix;