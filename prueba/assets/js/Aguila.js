import Animal from "./Animal.js"

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        console.log(this.sonido)
    }
}
export default Aguila
