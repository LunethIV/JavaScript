class Asignatura{
    constructor(nombre){
        this.nombre = nombre;
        this.alumnos = [];
        this.maximo = 10;
    }

    modificarMaximo(nuevoMaximoAlumnos){
        this.maximo = nuevoMaximoAlumnos;
    }

    agregarAlumnos(alumno){
        if(this.alumnos.length < this.maximo){
            this.alumnos.push(alumno);
        }else{
            console.error("Se ha alcanzado el máximo de alumnos.");
        }
    }

    listarAlumnos(){
        let indice = 0;
        this.alumnos.forEach(alumno => {
            console.log(indice + " " + alumno);
            indice++;
        })
    }

    eliminarAlumnos(indice){
        if(indice >= 0 && indice < this.alumnos.length){
            this.alumnos.splice(indice, 1);
            console.log(`Alumno con indice ${indice} eliminado.`);
        }else{
            console.error("El alumno no existe.");
        }
    }
}

// Crear un objeto asignatura
const programacion = new Asignatura("Programacion");

// Modificar el máximo de alumnos
programacion.modificarMaximo(4);

// Agregar alumnos
programacion.agregarAlumnos("Manuel");
programacion.agregarAlumnos("Juan");
programacion.agregarAlumnos("Laura");

// Agregar más alumnos de los permitidos
try{
programacion.agregarAlumnos("Ana");
programacion.agregarAlumnos("Luis");
programacion.agregarAlumnos("Sofía");
}catch(error){
    console.error(error.message);
}

// Listar alumnos
programacion.listarAlumnos();

// Eliminar alumnos
programacion.eliminarAlumnos(1);
programacion.listarAlumnos();