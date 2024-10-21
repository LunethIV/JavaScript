const formulario = document.getElementsByTagName("form")[0];

formulario.addEventListener("submit", function(ev){
    ev.preventDefault();

    let todoOK = true;

    const matricula = document.getElementById("matricula")
    const expReg = /[0-9]{4}[A-Z]{3}/

 

    if(!expReg.test(matricula.value.trim())){
        todoOK = false;
        alert("no")
    }

    if(todoOK){
        alert("todo ok")
        formulario.submit();
    }else{
        alert("problema")
    }
})