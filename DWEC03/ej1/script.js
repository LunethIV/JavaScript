const miniatura = document.getElementById("miniatura")
const fechaHora = document.getElementById("fechaHora");
const datosFecha = new Date()

    if(miniatura){
        miniatura.addEventListener("click",function(){
            window.open("ventana.html", "imagenGrande", "height=640, width=480");
        });
    }

    if(fechaHora){
        fechaHora.textContent =`${datosFecha.getDate()}/${datosFecha.getMonth() + 1}/${datosFecha.getFullYear()} - ${datosFecha.getHours()}:${datosFecha.getMinutes()}`;
    }