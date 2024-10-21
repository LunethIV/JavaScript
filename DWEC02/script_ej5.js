function factorial(){
    const entradaNumero = document.getElementById("entradaNumero");
    const numero = parseInt(entradaNumero.value);


    function calcularFactorial(num) {
        if (num === 0 || num === 1) {
            return 1; // Caso base: factorial de 0 y 1 es 1
        }else{
            let factorial = 1;
            for (let i = num; i > 1; i--) {
              factorial *= i;
            }
            return factorial;
        }
    }

    let salida = " ";
    for(let i = 1; i <= numero; i++){
        salida += calcularFactorial(i) + " "
    }

    const elementoSalida = document.getElementById("salida");
    elementoSalida.textContent = "Resultados: " + salida;
}

const numeroBtn = document.getElementById("numeroBtn");
numeroBtn.addEventListener("click", factorial);