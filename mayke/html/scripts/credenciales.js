// connect options

topic_raiz              = "u4iEMKI51iaAzfA"
topic_credenciales_acc  = "/credenciales/acceso"
topic_credenciales_TX   = "/credenciales/TX"
topic_credenciales_RX   = "/credenciales/RX"

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
  username: 'IEaIs3jgA4yh40Z',
  password: 'o6Bp9QHPesIEglE',
  keepalive: 60,
  clean: true,
}
// WebSocket connect url
const WebSocket_URL = 'wss://ioticos.org:8094/mqtt'
//const WebSocket_URL = 'wss://broker.shiftr.io:443/mqtt'

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



//------------------------------------------------------------------


    if (topic == topic_raiz + topic_credenciales_RX){
     splitted = message.toString().split(",");
      autorizacion = splitted[0];

      nombre_autorizado =  splitted[1];
      clave_autorizada  =  splitted[2];
      enlase   =  splitted[3];


       $("#display_autorizacion").html(clave_autorizada);
      $("#display_ms_espera").html(nombre_autorizado);

      if(nombre_autorizado == "Mauricio" && clave_autorizada == "12345"){
        window.location=enlase;
      }

    }

  })
