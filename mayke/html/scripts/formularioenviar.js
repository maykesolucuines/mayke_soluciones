
////////////////////////////////////////////////////////


      function validar(){
        var nombre,clave;
        nombre = document.getElementById('nombre').value;
        clave = document.getElementById('clave').value;
          console.log(nombre);

          client.publish(topic_raiz + topic_comparar,nombre+","+clave, (error) => {
            console.log(error || 'FORMULARIO ENVIADO')
          })

      }
