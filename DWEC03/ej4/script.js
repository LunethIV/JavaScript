// Rescatar el texto introducido.
const texto = document.getElementById("texto");

// Rescatar la el botón para descodificar.
const descodificar = document.getElementById("descodificar");

// Deshabilitar el botón hasta que sea necesario.
descodificar.disabled = true;

// Booleano necesario para la función.
let codificar = true;

function codificarDescodificar(texto, codificar){

    // Pasar a minusculas.
    let textoMinus = texto.value.toLowerCase();
    
    // Buscar las letras mediante regex y reemplazar en el texto en minusculas.
    if(codificar){
        let regexL = /L/gi;
        let regexE = /E/gi;
        let regexO = /O/gi;
        let regexS = /S/gi;

        textoMinus = textoMinus.replace(regexL,"1");
        textoMinus = textoMinus.replace(regexE,"3");
        textoMinus = textoMinus.replace(regexO,"0");
        textoMinus = textoMinus.replace(regexS,"5");

        // Mostrar resultado por pantalla.
        const mostrarResultado = document.getElementById("mostrarResultado");
        mostrarResultado.textContent = textoMinus;

        // Habilitar el botón.
        descodificar.disabled = false;
    }else{
        // Buscar los números y volver a pasarlos a letras.
        let regex1 = /1/gi;
        let regex3 = /3/gi;
        let regex0 = /0/gi;
        let regex5 = /5/gi;

        textoMinus = textoMinus.replace(regex1,"l");
        textoMinus = textoMinus.replace(regex3,"e");
        textoMinus = textoMinus.replace(regex0,"o");
        textoMinus = textoMinus.replace(regex5,"s");

        // Mostrar resultado por pantalla
        const mostrarResultado = document.getElementById("mostrarResultado");
        mostrarResultado.textContent = textoMinus;
    }
}

// Rescatar el botón de enviar.
const enviado = document.getElementById("enviado");

// Al hacer click en enviar, se comprueba que sea válido y se ejecuta la función codificarDescodificar.
enviado.addEventListener("click", function(){
    const regex = /[a-zA-Z ]+$/;

    if(!regex.test(texto.value)){
        alert("Error, el texto no es válido")
    }else{
        codificarDescodificar(texto, codificar);
    }
});

// Al pulsar el botón de descodificar, revertimos los cambios.
descodificar.addEventListener("click", function(){
    codificar = false;
    codificarDescodificar(texto, codificar);
})