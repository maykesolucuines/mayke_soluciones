// connect options

topic_raiz                   = "ldDIpWTlbADbYJI"
topic_credenciales_acc       = "/credenciales/acceso"
topic_credenciales_TX        = "/credenciales/TX"
topic_credenciales_RX        = "/credenciales/RX"
topic_conexion               = "/conexion"

var nombre_acc = "";
var clave_acc = "" ;

var autorizacion = "";
var enlase_recibido  = "";
var nombre_autorizado = "";
var clave_autorizada  = "";
var enlase_final  = "";

// Mensajes
mensaje_inicial = "Credenciales"

const options = {
  connectTimeout: 4000,
  // Authentication
  clientId:  " CREDENCIALES --->> " + Math.floor((Math.random() * 1000000) + 1),
  username: 'oTmbjbVfGi0n5wl',
  password: 'QqMxZJxOk1tgBPJ',
  keepalive: 60,
  clean: true,
}
// WebSocket connect url
const WebSocket_URL = 'wss://ioticos.org:8094/mqtt'
//const WebSocket_URL = 'wss://broker.shiftr.io:443/mqtt'
// const WebSocket_URL = 'ws://broker.hivemq.com:8000/mqtt'



// TCP/TLS connect url
//const TCP_URL = 'mqtt://broker.shiftr.io:443'
//const TCP_TLS_URL = 'mqtts://localhost:8883'

const client = mqtt.connect(WebSocket_URL, options)

client.on('connect', () => {
  console.log('Conexion Exitosa')

  client.subscribe(topic_raiz + topic_conexion)
  client.subscribe(topic_raiz + topic_credenciales_acc)
  client.subscribe(topic_raiz + topic_credenciales_TX)
  client.subscribe(topic_raiz + topic_credenciales_RX)

  client.publish(topic_raiz + topic_conexion,'Desconectado', (error) => {
    console.log(error || 'Publicacion Mensaje Inicial')
  })

})


client.on('reconnect', (error) => {
  console.log('Reconectado MQTT:', error)
})

client.on('error', (error) => {
  console.log('Error de Conexion:', error)
})


  //recibir mensajes de la tarjeta luces central
  client.on('message', (topic, message) => {

    console.log('Mensaje Recibido： ', topic, message.toString())


    if (topic == topic_raiz + topic_conexion){
      var splitted = message.toString().split(",");
      conexion_tarjeta = splitted[0];

      $("#display_conexion_tarjeta").html(conexion_tarjeta);
    }


//------------------------------------------------------------------

    if (topic == topic_raiz + topic_credenciales_RX){
     splitted = message.toString().split(",");
      autorizacion = splitted[0]
      mensaje = splitted[1];

      $("#display_autorizacion").html(autorizacion);
      $("#display_ms_espera").html(mensaje);

    }
    if (topic == topic_raiz + topic_credenciales_acc){
         splitted = message.toString().split(",");

          nombre_autorizado =  splitted[0];
          clave_autorizada  =  splitted[1];
          autorizado_nombre =  splitted[2];
          autorizada_clave  =  splitted[3];
          enlase   =  splitted[4];

          $("#display_autorizacion").html(autorizacion);
          $("#display_ms_espera").html(mensaje);


          if(nombre_autorizado == autorizado_nombre && clave_autorizada == autorizada_clave){
            window.location=enlase;
          }

        }


  })
