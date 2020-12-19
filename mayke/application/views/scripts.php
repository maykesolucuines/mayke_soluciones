<!-- inject:js -->
<script src="<?php echo base_url('js/d3.min.js')?>"></script>
<script src="<?php echo base_url('js/getmdl-select.min.js')?>"></script>
<script src="<?php echo base_url('js/material.min.js')?>"></script>
<script src="<?php echo base_url('js/nv.d3.min.js')?>"></script>
<script src="<?php echo base_url('js/layout/layout.min.js')?>"></script>
<script src="<?php echo base_url('js/scroll/scroll.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/charts/discreteBarChart.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/charts/linePlusBarChart.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/charts/stackedBarChart.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/employer-form/employer-form.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/line-chart/line-charts-nvd3.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/map/maps.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/pie-chart/pie-charts-nvd3.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/table/table.min.js')?>"></script>
<script src="<?php echo base_url('js/widgets/todo/todo.min.js')?>"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js" integrity="sha256-qSIshlknROr4J8GMHRlW3fGKrPki733tLq+qeMCR05Q=" crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>


  <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-145830444-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-145830444-2');
</script>


<script type="text/javascript">

window.onload = function() {
  <?php if($_SESSION['msg_body']!=""){ ?>
  Swal.fire({
    type: '<?php echo  $_SESSION['msg_type'];?>',
    title: '<?php echo  $_SESSION['msg_title'];?>',
    text: '<?php echo  $_SESSION['msg_body'];?>',
    footer: '<?php echo  $_SESSION['msg_footer'];?>'
  });

    <?php  $_SESSION['msg_title'] = "";?>
    <?php  $_SESSION['msg_type'] = "";?>
    <?php  $_SESSION['msg_body'] = "";?>
    <?php  $_SESSION['msg_footer'] = "";?>
    <?php } ?>
};

</script>

<!-- ////////////////////////////////////////////////////////////-->

<script type= "text/javascript">

const options = {
  connectTimeout: 5000,
  // Authentication
  clientId: '<?php echo $_SESSION['user_name']; ?>' + " -- " + Math.floor((Math.random() * 1000000) + 1),
  username: '<?php echo MQTT_USER; ?>',
  password: '<?php echo MQTT_PASSWORD; ?>',
  keepalive: 60,
  clean: true,
}
// WebSocket connect url
//const WebSocket_URL = 'wss://ioticos.org:8094/mqtt';
const WebSocket_URL = 'wss://broker.shiftr.io:443/mqtt';
const client = mqtt.connect(WebSocket_URL, options)


////////////////// cuando tenemos conexion ///////////////
var device_topic = '<?php echo ROOT_TOPIC ."/". $_SESSION['selected_topic']."/" ?>';
client.on('connect', () => {
    console.log('Conexion Exitosa!!')
    client.subscribe(device_topic + "conexion",{ qos: 0 }, (error) => {
      if(!error){
      console.log('Suscripcion Exitosa!!')
      client.publish(device_topic + 'conexion',"Desconectado",{ qos: 0, rein: false }, (error)=> {
      //console.log(error || 'Mensaje sw1 "1"')
    })
    }else{
      console.log('Suscripción fallida')
    }
  })
    client.subscribe(device_topic + "datos_variables",{ qos: 0 }, (error) => {
      if(!error){
      console.log('Suscripcion Exitosa!!')
    }else{
      console.log('Suscripción fallida')
    }
  })
  client.subscribe(device_topic + "datos_lamparas",{ qos: 0 }, (error) => {
    if(!error){
    console.log('Suscripcion Exitosa!!')
  }else{
    console.log('Suscripción fallida')
  }
})

  client.subscribe(device_topic + "actions/sw1",{ qos: 0 }, (error) => {
    if(!error){
    console.log('Suscripcion Exitosa!!')

  }else{
    console.log('Suscripción fallida')
  }
})

client.subscribe(device_topic + "actions/sw2",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw3",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw4",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw5",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw6",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw7",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw8",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw9",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/sw10",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
}
})

client.subscribe(device_topic + "actions/slider",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')
}else{
  console.log('Suscripción fallida')
 }
})

client.subscribe(device_topic + "inicio",{ qos: 0 }, (error) => {
  if(!error){
  console.log('Suscripcion Exitosa!!')

client.publish(device_topic + 'inicio',"actualizacion",{ qos: 0, rein: false }, (error)=> {
    //console.log(error || 'Mensaje sw1 "1"')
  })

}else{
  console.log('Suscripción fallida')
 }
})

  // Recibir mensajes y verlos en el navegador
  client.on('message', (topic, message) => {
    console.log('Tu topico: ', topic, '-----> ', message.toString())

    if (topic == device_topic + "conexion"){
      var splitted = message.toString().split(",");
      var conex = splitted[0];

      $("#display_conexion").html(conex);
    }

    if (topic == device_topic + "datos_variables"){
      var splitted = message.toString().split(",");

      var temp = splitted[0];
      var hum = splitted[1];

      var temperatura =  temp;
      var humedad =  hum;

      $("#display_temp").html(temp);
      $("#display_hum").html(hum);
    }


    if (topic == device_topic + "datos_lamparas"){
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
})
////////////////// Fin cuando tenemos conexion ///////////

////////////////// Reconectar conexion ///////////////////
client.on('reconnect', (error) => {
    console.log('Reconectado MQTT:', error)
})
////////////////// Fin de reconectar conexion ///////////

////////////////// Error de conexion ////////////////////
client.on('error', (error) => {
    console.log('Error de Conexion:', error)
})
////////////////// Fin de Error de conexion /////////////

function sw1_change(){
  if ($('#display_sw1').is(":checked"))
  {
    client.publish(device_topic + 'actions/sw1',"1",{ qos: 0, rein: false }, (error)=> {
    //console.log(error || 'Mensaje sw1 "1"')
  })
  }else{
    client.publish(device_topic + 'actions/sw1',"0",{ qos: 0, rein: false }, (error)=> {
    //console.log(error || 'Mensaje sw1 "0"')
   })
  }
}

function sw2_change(){
  if ($('#display_sw2').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw2',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw2',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw3_change(){
  if ($('#display_sw3').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw3',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw3',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw4_change(){
  if ($('#display_sw4').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw4',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw4',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw5_change(){
  if ($('#display_sw5').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw5',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw5',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw6_change(){
  if ($('#display_sw6').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw6',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw6',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw7_change(){
  if ($('#display_sw7').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw7',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw7',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw8_change(){
  if ($('#display_sw8').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw8',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw8',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw9_change(){
  if ($('#display_sw9').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw9',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw9',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function sw10_change(){
  if ($('#display_sw10').is(":checked"))
  {
  client.publish(device_topic + 'actions/sw10',"1",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "1"')
})
}else{
  client.publish(device_topic + 'actions/sw10',"0",{ qos: 0, rein: false }, (error)=> {
  //console.log(error || 'Mensaje sw2 "0"')
   })
  }
}

function slider_change(){
  value = $('#display_slider').val();

  client.publish(device_topic + 'actions/slider',value,{ qos: 0, rein: false }, (error)=> {
  console.log(error || 'Mensaje slider--> ' + value)
})
}

</script>


<!-- endinject -->

<style media="screen">
/* The switch - the box around the slider */
.switch {
position: relative;
display: inline-block;
width: 42px;
height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
opacity: 0;
width: 0;
height: 0;
}

/* The slider */
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
}

.slider:before {
position: absolute;
content: "";
height: 16px;
width: 16px;
left: 4px;
bottom: 4px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}

input:checked + .slider {
background-color: #2196F3;
}

input:focus + .slider {
box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
-webkit-transform: translateX(16px);
-ms-transform: translateX(16px);
transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
border-radius: 18px;
}

.slider.round:before {
border-radius: 50%;
}
</style>
