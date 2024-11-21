const pilotosInput = document.getElementById("pilotosBtn")
const borrarBtn = document.getElementById("borrarBtn")
const listarDorsalBtn = document.getElementById("listarDorsalBtn")
const listarNombreBtn = document.getElementById("listarNombreBtn")

let pilotos = ["Juan", "Manuel", "Ana"]; // Crear el array fuera, si no, se crea de nuevo cada vez que se pulsa el botón.

pilotosInput.addEventListener("click", function(){

    let piloto = prompt("Introduce un piloto");

    pilotos.push(piloto)

    console.log("Piloto añadido")
})

borrarBtn.addEventListener("click", function(){

    let piloto = prompt("¿Qué piloto quieres eliminar?") - 1;

    if(piloto >= 0 && piloto < pilotos.length && piloto != null){
        pilotos.splice(piloto, 1);
        console.log(`Piloto con dorsal ${piloto} borrado`)
    }else{
        console.log("No existe ese piloto")
    }
})

listarDorsalBtn.addEventListener("click", function(){

    let dorsal = 1;

    for(let i = 0; i < pilotos.length; i++){
        console.log(`Dorsal: ${dorsal} ${pilotos[i]}`)
        dorsal++;
    }

})

listarNombreBtn.addEventListener("click", function(){

    let copiaPilotos = pilotos.slice() // slice es un shadow copy, si se modifica el array original, se modifica la copia.
    copiaPilotos.sort( (a,b) => {
        if(a.toLowerCase() <= b.toLowerCase()){
            return -1 // dejar "a" delante del objeto "b" en el array
        } 
        else{
            return 1 // intercambiar "a" y "b"
        }
    })

    for(let i = 0; i < copiaPilotos.length; i++){
        console.log(copiaPilotos[i])
    }

})