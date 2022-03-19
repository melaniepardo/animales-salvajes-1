import Animal from "./Animal.js"

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        console.log(this.sonido)
    }
}


export default Lobo