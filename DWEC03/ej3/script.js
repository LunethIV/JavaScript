const formulario = document.getElementsByTagName("form")[0];

formulario.addEventListener("submit", function(ev){
    ev.preventDefault();

    const pass = document.getElementById("pass");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;

    if(!regex.test(pass.value.trim())){
        alert("La contraseña no es válida");
    }else{
        alert("es buena")
        formulario.submit();
    }
});