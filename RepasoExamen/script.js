const cantidadEuros = document.getElementById("cantidadEuros")
const porcentajeRentabilidad = document.getElementById("porcentajeRentabilidad")
const numeroAnios = document.getElementById("numeroAnios")
const submitBtn = document.getElementById("submitBtn")
const evolucionDeposito = document.getElementById("evolucionDeposito")
const rentabilidadTotal = document.getElementById("rentabilidadTotal")

submitBtn.addEventListener("click", function(){

    evolucionDeposito.innerHTML = `Evolución:<br>${calcularEvolucionDeposito()}`
    rentabilidadTotal.innerHTML = `Rentabilidad total: ${calcularRentabilidadTotal()}`
});

function calcularEvolucionDeposito(){
    let anios = parseInt(numeroAnios.value);
    let cantidadInicial = parseInt(cantidadEuros.value);
    let porcentaje = porcentajeRentabilidad.value / 100;
    let lista = [cantidadInicial];

    for(let i = 0; i < anios; i++){
        cantidadInicial += cantidadInicial * porcentaje;
        lista.push(cantidadInicial);
    }

    return lista;
};

function calcularRentabilidadTotal(){
    let cantidadInicial = parseInt(cantidadEuros.value);
    let porcentaje = porcentajeRentabilidad.value / 100;
    let anios = parseInt(numeroAnios.value);

    for(let i = 0; i < anios; i++){
        cantidadInicial += (cantidadInicial * porcentaje);
    }
    return cantidadInicial;
};