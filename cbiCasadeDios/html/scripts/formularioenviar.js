
////////////////////////////////////////////////////////


      function validar(){
        var nombre,clave;
        nombre = document.getElementById('nombre').value;
        clave = document.getElementById('clave').value;
          console.log(nombre+","+clave);


          client.publish(topic_raiz + topic_credenciales_TX,nombre+","+clave, (error) => {
            console.log(error || 'FORMULARIO ENVIADO')
            // window.location=enlase_final;
          })
      }
