function diferencia(){
    // .value devuelve un String, por lo que es necesario parsear a entero.
    const primero = document.getElementById("01");
    const valorPrimero = parseInt(primero.value);
    
    const segundo = document.getElementById("02")
    const valorSegundo = parseInt(segundo.value);

    const tercero = document.getElementById("03")
    const valorTercero = parseInt(tercero.value);

    const cuarto = document.getElementById("04")
    const valorCuarto = parseInt(cuarto.value);


    let mayor;

    if(valorPrimero > valorSegundo && valorPrimero > valorTercero && valorPrimero > valorCuarto){
        mayor = valorPrimero;
    }else if(valorSegundo > valorPrimero && valorSegundo > valorTercero && valorSegundo > valorCuarto){
        mayor = valorSegundo;
    }else if(valorTercero > valorPrimero && valorTercero > valorSegundo && valorTercero > valorCuarto){
        mayor = valorTercero;
    }else{
        mayor = valorCuarto;
    }

    let menor;

    if(valorPrimero < valorSegundo && valorPrimero < valorTercero && valorPrimero < valorCuarto){
        menor = valorPrimero;
    }else if(valorSegundo < valorPrimero && valorSegundo < valorTercero && valorSegundo < valorCuarto){
        menor = valorSegundo;
    }else if(valorTercero < valorPrimero && valorTercero < valorSegundo && valorTercero < valorCuarto){
        menor = valorTercero;
    }else{
        menor = valorCuarto;
    }

    let diferencia = mayor - menor;

    const salida = document.getElementById("salida");
    salida.textContent = "El mayor es " + mayor + " y el menor " + menor + ". La diferencia entra ambos es: " + diferencia;
}

    const enviarFormulario = document.getElementById("enviarFormulario");
    enviarFormulario.addEventListener("click", diferencia);