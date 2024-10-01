function generarCarta(){
    let carta = Math.floor(Math.random() * 11) + 1;
    return carta;
}

function generarCartaCrupier(){
    let carta = Math.floor(Math.random() * 8) + 14;
    return carta;
}

function blackjack(){
    
    let puntuacionJugador = generarCarta();

    const puntos = document.getElementById("puntos");
    puntos.textContent = puntuacionJugador;

    const pedirOtra = document.getElementById("pedirOtra");
    pedirOtra.addEventListener("click", function(){
        if(puntuacionJugador < 21){
            puntos.textContent = puntuacionJugador += generarCarta();
        }else if(puntuacionJugador === 21){
            mensaje.textContent = "¡Tienes 21! ¡Has ganado!";
            pedirOtra.disabled = true;
            plantarse.disabled = true;
        }else{
            resultadoJugador.textContent = "Jugador: " + puntuacionJugador;
            mensaje.textContent = "¡Te has pasado de 21! ¡Has perdido!";
            pedirOtra.disabled = true;
            plantarse.disabled = true;
        }
    });

    const plantarse = document.getElementById("plantarse");
    plantarse.addEventListener("click", function(){
        let puntuacionCrupier;
        const resultadoJugador = document.getElementById("resultadoJugador");
        const resultadoCasa = document.getElementById("resultadoCasa");
        const mensaje = document.getElementById("mensaje");

        if(puntuacionJugador <= 21){
            puntuacionCrupier = generarCartaCrupier();
        }

        if(puntuacionJugador <= 21 && puntuacionJugador > puntuacionCrupier){
            resultadoJugador.textContent = "Jugador: " + puntuacionJugador;
            resultadoCasa.textContent = "Casa: " + puntuacionCrupier;
            mensaje.textContent = "¡Has ganado!";
        }else if(puntuacionCrupier <= 21 && puntuacionCrupier > puntuacionJugador){
            resultadoJugador.textContent = "Jugador: " + puntuacionJugador;
            resultadoCasa.textContent = "Casa: " + puntuacionCrupier;
            mensaje.textContent = "¡Has perdido!";        
        }else if(puntuacionJugador > 21){
            resultadoJugador.textContent = "Jugador: " + puntuacionJugador;
            resultadoCasa.textContent = "Casa: " + puntuacionCrupier;
            mensaje.textContent = "¡Has perdido!";       
        }else if(puntuacionJugador === puntuacionCrupier){
            resultadoJugador.textContent = "Jugador: " + puntuacionJugador;
            resultadoCasa.textContent = "Casa: " + puntuacionCrupier;
            mensaje.textContent = "¡Empate!";  
        }

        pedirOtra.disabled = true;
        plantarse.disabled = true;
    })

    const reiniciar = document.getElementById("reiniciar");
    reiniciar.addEventListener("click", function(){
        puntuacionJugador = generarCarta();
        puntos.textContent = puntuacionJugador;
        pedirOtra.disabled = false;
        plantarse.disabled = false;
        resultadoJugador.textContent = "";
        resultadoCasa.textContent = "";
        mensaje.textContent = "";
    })
}
blackjack();