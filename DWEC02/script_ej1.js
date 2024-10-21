function calculo(){
    const entradaCaramelos = document.getElementById("entradaCaramelos");
    const totalCaramelos = entradaCaramelos.value;

    const entradaPersonas = document.getElementById("entradaPersonas");
    const totalPersonas = entradaPersonas.value;

    const caramelosPorPersona = totalCaramelos / totalPersonas;
    const caramelosSobrantes = totalCaramelos % totalPersonas;
    
    const salida = document.getElementById("salida");
    salida.textContent = "Si tienes " + totalCaramelos + " caramelos, y hay " + totalPersonas + " personas, tienes que repartir " + caramelosPorPersona + " por persona, y te sobran " + caramelosSobrantes + " caramelos.";
}

const enviarFormulario = document.getElementById("enviarFormulario");
enviarFormulario.addEventListener("click", calculo);