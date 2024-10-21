const miniatura = document.getElementById("miniatura");
const datosFecha = new Date();

miniatura.addEventListener("click", function(){
    const ventana = window.open("", "imagenGrande", "height=640, width=480");
    ventana.document.write(`
        <img src="imagen.jpg" alt="Imagen grande" height="500" width="300">
        <p>Fecha: ${datosFecha.getDate()}/${datosFecha.getMonth() + 1}/${datosFecha.getFullYear()} Hora: ${datosFecha.getHours()}:${datosFecha.getMinutes()}</p>
        `)
});