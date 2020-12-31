// connect options

topic_raiz              = "luces_FAMARPE"
topic_credenciales_acc  = "/credenciales/acceso"
topic_credenciales_TX   = "/credenciales/TX"
topic_credenciales_RX   = "/credenciales/RX"

var nombre_acc = "";
var clave_acc = "" ;

var autorizacion = "";
var enlase  = "";
var nombre_autorizado = "";
var clave_autorizada  = "";




// Mensajes
mensaje_inicial = "Credenciales"

const options = {
  connectTimeout: 4000,
  // Authentication
  clientId:  " CREDENCIALES --->> " + Math.floor((Math.random() * 1000000) + 1),
  username: 'mayke_iot',
  password: 'Mk121988181994',
  keepalive: 60,
  clean: true,
}
// WebSocket connect url
const WebSocket_URL = 'wss://broker.shiftr.io:443/mqtt'

// TCP/TLS connect url
//const TCP_URL = 'mqtt://broker.shiftr.io:443'
//const TCP_TLS_URL = 'mqtts://localhost:8883'

const client = mqtt.connect(WebSocket_URL, options)

client.on('connect', () => {
  console.log('Con Exitosa')
  client.subscribe(topic_raiz + topic_credenciales_TX)
  client.subscribe(topic_raiz + topic_credenciales_RX)
  client.subscribe(topic_raiz + topic_credenciales_acc)


  client.publish(topic_raiz + topic_credenciales_acc,mensaje_inicial, (error) => {
    console.log(error || 'Publicacion Exitosa')
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

    console.log('receive message：', topic, message.toString())

    if (topic == topic_raiz + topic_credenciales_acc){
      var splitted = message.toString().split(",");
      nombre_acc = splitted[0];
      clave_acc = splitted[1];

      $("#display_autorizacion").html(nombre_acc);
      $("#display_ms_espera").html(clave_acc);
    }

    if(nombre_autorizado == nombre && clave_autorizada == clave){
    window.location=enlase;
    }



//------------------------------------------------------------------


    if (topic == topic_raiz + topic_credenciales_RX){
     splitted = message.toString().split(",");
      autorizacion = splitted[0];
      mensaje   =  splitted[1];
      enlase   =  splitted[1];
       // nombre_autorizado = splitted[2];
       // clave_autorizada   =  splitted[3];

       $("#display_autorizacion").html(autorizacion);
      $("#display_ms_espera").html(mensaje);

    }

  })
