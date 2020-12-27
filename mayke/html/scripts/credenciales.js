// connect options

topic_raiz           = "luces_FAMARPE"
topic_credenciales   = "/credenciales"

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
  console.log('Conexion Exitosa')
  client.subscribe(topic_raiz + topic_credenciales)


  client.publish(topic_raiz + topic_credenciales,mensaje_inicial, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })

})

client.on('reconnect', (error) => {
  console.log('Reconectado MQTT:', error)

  client.publish(topic_raiz + topic_credenciales,mensaje_inicial, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })

})

client.on('error', (error) => {
  console.log('Error de Conexion:', error)
})

//recibir mensajes de la tarjeta luces central
client.on('message', (topic, message) => {
  console.log('receive message：', topic, message.toString())

  if (topic == topic_raiz + topic_credenciales){
    var splitted = message.toString().split(",");
    var conex = splitted[0];

    $("#display_conexion").html(conex);
  }

})
////////////////////////////////////////////////////////
function enviarFormulario() {
  client.publish(topic_raiz + topic_credenciales,nombre, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })
}
