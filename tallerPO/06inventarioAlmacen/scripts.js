// 6. Gestión de un inventario de almacén
// Público: códigoProducto, nombreProducto.
// Privado: cantidadEnStock.
// Métodos:
// agregarProducto(): Este método deberá verificar si el producto ya existe antes de agregarlo y aumentar la cantidad en stock.
// retirarProducto(): Este método deberá verificar la cantidad en stock antes de retirar el producto.
// mostrarStock(): Este método deberá acceder al atributo privado cantidadEnStock para mostrar el
// stock del producto.
// Requerimientos:
//  Hacer que el atributo cantidadEnStock sea privado.
//  Proveer un método mostrarStock() que oculte la implementación del acceso a
// cantidadEnStock.

class Almacen {
    constructor(nombreA) {
        this.Almacen = nombreA
        this.productos = []
    }
    agregarProducto(producto){
        let existe = this.productos.find(product => product.nombreP == producto.nombreP)
        if (existe) {
            existe.cantidadEnStock += producto.cantidadEnStock
        } else {
            this.productos.push(producto)
        }
    }

    retirarProducto(producto){
        let existe = this.productos.find(product => product.codigo == producto.codigo)
        if (existe) {
            existe.setStock() -= producto.cantidadEnStock
        } else {
            console.error('El producto no existe')
        }
    }

    mostrarStock(producto){
        let existe = this.productos.find(product => product.codigo == producto.codigo)
        if (existe) {
            console.log(`El stock de ${existe.nombreP} es de ${existe.cantidadEnStock} `)
        } else {
            console.error('El producto no existe')
        }
    }
    mostrarProductos() {
        this.productos.forEach(producto => {
            console.log(`El stock de ${producto.nombreP} es de ${producto.getStock()} `)
        });
    }
}

class Producto {
    #cantidadEnStock
    constructor(codigoP, nombreP, cantidadEnStock) {
        this.codigoP = codigoP
        this.nombreP = nombreP
        this.#cantidadEnStock = cantidadEnStock
    }

    getStock() {
        return this.#cantidadEnStock
    }
    setStock(cantidad) {
        this.#cantidadEnStock = cantidad
    }
}

let almacen = new Almacen('Tiendas D1')
let producto1 = new Producto(1, 'libro', 10)
almacen.agregarProducto(producto1);
almacen.mostrarProductos()
let producto2 = new Producto(1, 'libro', 10)
almacen.agregarProducto(producto2)
almacen.mostrarProductos()