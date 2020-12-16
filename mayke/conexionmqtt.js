// connect options

topic_raiz           = "luces_FAMARPE"
topic_conexion       = "/conexion"
topic_variables      = "/datos_variables"
topic_accion_botones = "/181994/actions/sw1"
topic_datos_lamparas = "/datos_lamparas"

// Mensajes
mensaje_inicial = "Desconectado"
resultado_1 = "1"
resultado_2 = "0"
const options = {
  connectTimeout: 4000,
  // Authentication
  clientId:  " FAMARPE_WEB --->> " + Math.floor((Math.random() * 1000000) + 1),
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
  client.subscribe(topic_raiz + topic_datos_lamparas)

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

// Recibir mensajes y verlos en el navegador
client.on('message', (topic, message) => {
  console.log('receive message：', topic, message.toString())

  if (topic == topic_raiz + "/datos_lamparas"){
    var splitted = message.toString().split(",");

    var lampara1 = splitted[0];
    var lampara2 = splitted[1];
    var lampara3 = splitted[2];
    var lampara4 = splitted[3];
    var lampara5 = splitted[4];
    var lampara6 = splitted[5];
    var lampara7 = splitted[6];
    var lampara8 = splitted[7];
    var lampara9 = splitted[8];
    var lampara10 = splitted[9];


    if(lampara1 == "1"){
      document.getElementById("led1").setAttribute("stop-color", "#550000");
      console.log(error || 'led uno encendido')
    }else{
      document.getElementById("led1").setAttribute("stop-color","#000000");
      console.log(error || 'led uno apagado')
    }
    if(lampara2 == "1" ){

    }else{

    }
    if(lampara3 == "1" ){

    }else{

    }
    if(lampara4 == "1" ){

    }else{

    }
    if(lampara5 == "1" ){

    }else{

    }
    if(lampara6 == "1" ){

    }else{

    }
    if(lampara7 == "1" ){

    }else{

    }
    if(lampara8 == "1" ){

    }else{

    }
    if(lampara9 == "1" ){

    }else{

    }
    if(lampara10 == "1" ){

    }else{

    }
  }

})


// funcion de botones
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
