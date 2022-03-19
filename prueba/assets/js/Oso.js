import Animal from "./Animal.js"

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir() {
        console.log(this.sonido)
    }
}
export default Oso
