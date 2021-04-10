function validar() {
    var nombre = document.getElementById(Nombre);
    nombre= Nombre.value;
    
    var apellido = document.getElementById(Apellido);
    apellido= Apellido.value;

    var email = document.getElementById("Email");

    var celular = document.getElementById(Celular);
    celular= Celular.value;

    var departamento = document.getElementById(Departamento);
    departamento= Departamento.value;

    var ciudad = document.getElementById(Ciudad);
    ciudad= Ciudad.value;

    var direccion = document.getElementById(Direccion);
    direccion= Direccion.value;

    var descripcion = document.getElementById(Descripcion);
    descripcion= Descripcion.value;

    var mensaje_error = document.getElementById(MensajeError);
    mensaje_error= MensajeError;

    var texto;

    mensaje_error.style.padding = "10px";

    if(nombre.length <2){
        texto = "Ingrese Un Nombre Válido"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(apellido.length <2){
        texto = "Ingrese Un Apellido Válido"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(isNaN(celular) || celular.length != 10){
        texto = "Ingrese Un Celular Válido"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(email.validity.typeMismatch){

        email.setCustomValidity("Ingrese Un Correo Válido");
    }

    if(departamento.length <2){
        texto = "Ingrese Un Departamento Válido"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(ciudad.length <2){
        texto = "Ingrese Una Ciudad Válida"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(direccion.length <2){
        texto = "Ingrese Una Dirección Válida"
        mensaje_error.innerHTML = texto;
        return false;
    }

    if(descripcion.length <10){
        texto = "Ingrese Al Menos Diez (10) Caracteres"
        mensaje_error.innerHTML = texto;
        return false;
    }

    alert ("Pronto nos comunicaremos con usted");
    return true;
}