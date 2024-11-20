const cantidadEuros = document.getElementById("cantidadEuros")
const porcentajeRentabilidad = document.getElementById("porcentajeRentabilidad")
const numeroAnios = document.getElementById("numeroAnios")
const submitBtn = document.getElementById("submitBtn")
const evolucionDeposito = document.getElementById("evolucionDeposito")
const rentabilidadTotal = document.getElementById("rentabilidadTotal")

submitBtn.addEventListener("click", function(){

    let regexEuros = /^[1-9]\d{2,}$/
    let regexAnios = /^[1-9]\d*$/
    let regexPorcentaje = /^(?:100(?:\.0{1,2})?|[1-9][0-9]{0,1}(?:\.[0-9]{1,2})?)$/

    if(regexEuros.test(cantidadEuros.value) && regexAnios.test(numeroAnios.value) && regexPorcentaje.test(porcentajeRentabilidad.value)){
        evolucionDeposito.innerHTML = `Evolución:<br>${calcularEvolucionDeposito()}`
        rentabilidadTotal.innerHTML = `Rentabilidad total: ${calcularRentabilidadTotal()}`
    }else if(!regexEuros.test(cantidadEuros.value)){
        alert("Error, introduce una cantidad de euros válida")
    }else if(!regexAnios.test(numeroAnios)){
        alert("Error, introduce una cantidad de años válida")
    }else if(!regexPorcentaje.test(porcentajeRentabilidad.value)){
        alert("Error, introduce un porcentaje válido")
    }

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