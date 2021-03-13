  // connect options



  // topic_raiz           = "g8g7zIGSSeyRQG1"
  // topic_conexion       = "/conexion"
  // topic_variables      = "/datos_variables"
  // topic_accion_botones = "/actions/#"
  // topic_datos_lamparas = "/datos_lamparas"
  //
  // // Mensajes
  // mensaje_inicial = "Desconectado"
  // resultado_1 = "1"
  // resultado_2 = "0"
  // const options = {
  //   connectTimeout: 4000,
  //   // Authentication
  //   clientId:  " WEB  FAM-MERCADO--->> " + Math.floor((Math.random() * 1000000) + 1),
  //   username: 'eEvBWk8Ugzrz1fU',
  //   password: 'gooY5cMfsbZkK1D',
  //   keepalive: 60,
  //   clean: true,
  // }

///////////////////


  topic_raiz           = "ldDIpWTlbADbYJI"
  topic_conexion       = "/conexion"
  topic_variables      = "/datos_variables"
  topic_accion_botones = "/actions/#"
  topic_datos_lamparas = "/datos_lamparas"

  // // Mensajes
  mensaje_inicial = "Desconectado"
  resultado_1 = "1"
  resultado_2 = "0"

const options = {
  connectTimeout: 4000,
  // Authentication
  clientId:  " WEB FAM-MERCADO--->> " + Math.floor((Math.random() * 1000000) + 1),
  username: 'oTmbjbVfGi0n5wl',
  password: 'QqMxZJxOk1tgBPJ',
  keepalive: 60,
  clean: true,
}

  // WebSocket connect url

   const WebSocket_URL = 'wss://ioticos.org:8094/mqtt'
  //const WebSocket_URL = 'wss://broker.shiftr.io:443/mqtt'
  //const WebSocket_URL = 'ws://broker.hivemq.com:8000/mqtt'


  // TCP/TLS connect url
  //const TCP_URL = 'mqtt://broker.shiftr.io:443'
  //const TCP_TLS_URL = 'mqtts://localhost:8883'

  const client = mqtt.connect(WebSocket_URL, options)

  client.on('connect', () => {
    console.log('Conexion Exitosa')
    //client.subscribe(topic_raiz + topic_variables)
    client.subscribe(topic_raiz + topic_conexion)
    //client.subscribe(topic_raiz + topic_accion_botones)
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

  //recibir mensajes de la tarjeta luces central
  client.on('message', (topic, message) => {
    console.log('receive message：', topic, message.toString())

    if (topic == topic_raiz + topic_conexion){
      var splitted = message.toString().split(",");
      var conex = splitted[0];

      $("#display_conexion").html(conex);
    }


    if (topic == topic_raiz + topic_datos_lamparas){
    var splitted = message.toString().split(",");

    var switch1 = splitted[0];
    var switch2 = splitted[1];
    var switch3 = splitted[2];
    var switch4 = splitted[3];
    var switch5 = splitted[4];
    var switch6 = splitted[5];
    var switch7 = splitted[6];
    var switch8 = splitted[7];
    var switch9 = splitted[8];
    var switch10 = splitted[9];


    if(switch1 == "1"){
      $("#display_sw1").prop('checked', true);
    }else{
      $("#display_sw1").prop('checked',"");
    }
    if(switch2 == "1" ){
      $("#display_sw2").prop('checked', true);
    }else{
      $("#display_sw2").prop('checked',"" );
    }
    if(switch3 == "1" ){
      $("#display_sw3").prop('checked', true);
    }else{
      $("#display_sw3").prop('checked',"" );
    }
    if(switch4 == "1" ){
      $("#display_sw4").prop('checked', true);
    }else{
      $("#display_sw4").prop('checked',"" );
    }
    if(switch5 == "1" ){
      $("#display_sw5").prop('checked', true);
    }else{
      $("#display_sw5").prop('checked',"" );
    }
    if(switch6 == "1" ){
      $("#display_sw6").prop('checked', true);
    }else{
      $("#display_sw6").prop('checked',"" );
    }
    if(switch7 == "1" ){
      $("#display_sw7").prop('checked', true);
    }else{
      $("#display_sw7").prop('checked',"" );
    }
    if(switch8 == "1" ){
      $("#display_sw8").prop('checked', true);
    }else{
      $("#display_sw8").prop('checked',"" );
    }
    if(switch9 == "1" ){
      $("#display_sw9").prop('checked', true);
    }else{
      $("#display_sw9").prop('checked',"" );
    }
    if(switch10 == "1" ){
      $("#display_sw10").prop('checked', true);
    }else{
      $("#display_sw10").prop('checked',"" );
    }
  }


  })
  ////////////////////////////////////////////////////////
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
