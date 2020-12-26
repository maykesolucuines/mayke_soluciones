var nombre = document.getElemntByid('nombre');
var password = document.getElemntByid('password');
var error = document.getElemntByid('error');
error.style.color = 'red';


// function enviarFormulario(){
//   console.log('Enviando formulario...');
//
//   var mensajesError = [];
//
//   if(nombre.value === null || nombre.value === ''){
//     mensajeError.push('Ingresa tu nombre');
//   }
//
//   if(password.value === null || password.value === ''){
//     mensajesError.push('Ingresa tu password');
//   }
//
// error.innerHTML =  mensajesError.join(', ');
//
//   return false;
// }

var form = document.getElemntByid('formulario');
form.addEventListener('submit', function(evt){
  evt.preventDefault();
  console.log('Enviando formulario...');
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
      mensajeError.push('Ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
      mensajesError.push('Ingresa tu password');
    }

  error.innerHTML =  mensajesError.join(', ');

});
