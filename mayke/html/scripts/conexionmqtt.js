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

function sw1_change(){
  if ($('#display_sw1').is(":checked"))
  {
    client.publish(topic_raiz + '/actions/sw1',"1",{ qos: 0, rein: false }, (error)=> {
    //console.log(error || 'Mensaje sw1 "1"')
  })
  }else{
    client.publish(topic_raiz + '/actions/sw1',"0",{ qos: 0, rein: false }, (error)=> {
    //console.log(error || 'Mensaje sw1 "0"')
   })
  }
}

function sw2_change(){
  if ($('#display_sw2').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw2',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw2',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw3_change(){
  if ($('#display_sw3').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw3',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw3',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw4_change(){
  if ($('#display_sw4').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw4',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw4',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw5_change(){
  if ($('#display_sw5').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw5',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw5',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw6_change(){
  if ($('#display_sw6').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw6',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw6',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw7_change(){
  if ($('#display_sw7').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw7',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw7',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw8_change(){
  if ($('#display_sw8').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw8',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw8',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw9_change(){
  if ($('#display_sw9').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw9',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw9',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw10_change(){
  if ($('#display_sw10').is(":checked"))
  {
  client.publish(topic_raiz + '/actions/sw10',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(topic_raiz + '/actions/sw10',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}
