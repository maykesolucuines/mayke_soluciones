// connect options

topic_raiz           = "luces_FAMARPE"
topic_credenciales_TX   = "/credenciales/TX"
topic_credenciales_RX   = "/credenciales/RX"


// Mensajes
// mensaje_inicial = "Credenciales"

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


  //
  // client.publish(topic_raiz + topic_credenciales,mensaje_inicial, (error) => {
  //   console.log(error || 'Publicacion Exitosa')
  // })

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

    if (topic == topic_raiz + topic_credenciales_RX){
      var splitted = message.toString().split(",");
      var autorizacion = splitted[0];
      var ms_espera = splitted[1];

      $("#display_autorizacion").html(autorizacion);
      $("#display_ms_espera").html(ms_espera);
    }

  })
