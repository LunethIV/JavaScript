function multiplos7(){
    const entradaNumero = document.getElementById("entradaNumero");
    const valorIngresado = entradaNumero.value.trim(); // Se eliminan los espacios en blanco, si no, lo detecta como cadena.

    if(isNaN(valorIngresado)){
        console.error("ERROR, NO ES UN NÚMERO");
    }else{
        let salida = "";
        for(let i = 0; i <= valorIngresado; i++){
            if(i % 7 === 0 && i !== 0){
                salida += i + " ";
            }
        }
        const elementoSalida = document.getElementById("salida");
        elementoSalida.textContent = salida;
    }
}

const entradaNumeroBtn = document.getElementById("entradaNumeroBtn");
entradaNumeroBtn.addEventListener("click", multiplos7);