
////////////////////////////////////////////////////////


function validar(){
    var nombre,clave;
    nombre = document.getElementById('nombre').value;
    clave = document.getElementById('clave').value;
    console.log(nombre+","+clave);


    client.publish(topic_raiz + topic_credenciales_TX,nombre+","+clave, (error) => {
        console.log(error || 'FORMULARIO ENVIADO')
        // window.location=enlase_final;

        // setTimeout(function(){mostrarAviso()},3000); // 3000ms = 3s
    })
}



// function mostrarAviso(){
//     alert("Han pasado los tres segundos");
// }
