const asignaturas = ["Javascript", "HTML", "CSS"]

class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        const nombreAsignaturas = {nombre:this.nombre, asignaturas:this.asignaturas}
        console.log(nombreAsignaturas)
    }
}

let estudiante_1 = new Estudiante("Guido", "Javascript")

estudiante_1.obtenDatos()