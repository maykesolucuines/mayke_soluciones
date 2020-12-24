// connect options

topic_raiz           = "luces_FAMARPE"
topic_conexion       = "/conexion"
topic_variables      = "/datos_variables"
topic_accion_botones = "/181994/actions/sw1"

// Mensajes
mensaje_inicial = "Desconectado"
resultado_1 = "1"
resultado_2 = "0"
const options = {
  connectTimeout: 4000,
  // Authentication
  clientId:  " WEB --->> " + Math.floor((Math.random() * 1000000) + 1),
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
  client.subscribe(topic_raiz + topic_variables)
  client.subscribe(topic_raiz + topic_conexion)

  client.publish(topic_raiz + topic_conexion,mensaje_inicial, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })

})

client.on('reconnect', (error) => {
  console.log('Reconectado MQTT:', error)

  client.publish(topic_raiz + topic_conexion,mensaje_inicial, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })

})

client.on('error', (error) => {
  console.log('Error de Conexion:', error)
})

client.on('message', (topic, message) => {
  console.log('receive message：', topic, message.toString())
})

function enviarDatoMQTTbt1() {
  client.publish(topic_raiz + topic_accion_botones,resultado_1, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })
}
function enviarDatoMQTTbt2() {
  client.publish(topic_raiz + topic_accion_botones,resultado_2, (error) => {
    console.log(error || 'Publicacion Exitosa')
  })
}
