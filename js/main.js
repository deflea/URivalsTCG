window.onload = iniciar;
function iniciar(){
    document.getElementById("send-button").addEventListener('click', validate, false);
}


function validarNombre() {
    var nombre = document.getElementById('nombre');
    if (nombre.value == '' ) {
      alert('El campo nombre no puede estar vacio');
      return false;
    } else if (nombre.value.length < 2){
        alert('La longitud del campo no puede ser menor a 2 caracteres');
        return false;
    }
    return true;
  }
  
  function validarEmail() {
      var email = document.getElementById('email');
      if (!(email.value.includes('@'))) {
        alert('El formato del campo email no es valido');
        return false;
      } 
      return true;
    }

function validarMensaje(){
    var mensaje = document.getElementById('mensaje');
    if (mensaje.value ==''){
        alert('El contenido del mensaje no puede estar vacio');
        return false;
    }
    return true;
}
  
function validate() {
    if (validarNombre() && validarEmail() && validarMensaje() && confirm('Pulse aceptar si desea enviar el form')){
        nombre.value= "";
        email.value= "";
        mensaje.value= "";
        return true;
    }
    return false;
}