// Una panadería necesita crear un programa que involucre el tipo de pan, el insumo principal usado, la cantidad producida y el costo de producción de cada tipo de pan. Para ello se debe identificar la clase (de nombre “panadería”), junto con, los atributos de la clase y los métodos getters y setters, además, incluir un método con el mismo nombre para cada una de las clases (padre e hijas), sin argumentos y con un mensaje adecuado para cada una de ellas.

class panaderia{
    constructor(nombre, tipo, insumoPrincipal, cantidad, costo){ 
        this.nombre = nombre
        this.tipo = tipo
        this.insumoPrincipal = insumoPrincipal
        this.cantidad = cantidad
        this.costo = costo
    }

    get getInsumoPrincipal(){
        return this.insumoPrincipal
    }

    set setInsumoPrincipal(insumoPrincipal){
        this.insumoPrincipal = insumoPrincipal
    }

    get getCantidad(){
        return this.cantidad
    }

    set setCantidad(cantidad){
        this.cantidad = cantidad
    }

    get getCosto(){
        return this.costo
    }

    set setCosto(costo){
        this.costo = costo
    }

    informacionPan(){
        return "nombre: " + this.nombre + " tipo: " + this.tipo + " insumoPrincipal: " + this.insumoPrincipal + " cantidad: " + this.cantidad + " costo: " + this.costo
    }
}

class Pan extends panaderia{
    constructor(nombre, tipo, insumoPrincipal, cantidad, costo){
        super(nombre, tipo, insumoPrincipal, cantidad, costo)
    }

    informacionPan(){
        return "nombre: " + this.nombre + " tipo: " + this.tipo + " insumoPrincipal: " + this.insumoPrincipal + " cantidad: " + this.cantidad + " costo: " + this.costo
    }

    informacionPan(){
        return "nombre: " + this.nombre + " tipo: " + this.tipo + " insumoPrincipal: " + this.insumoPrincipal + " cantidad: " + this.cantidad + " costo: " + this.costo
    }
}