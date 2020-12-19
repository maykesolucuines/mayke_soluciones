<header class="mdl-layout__header">
  <div class="mdl-layout__header-row">
    <div class="mdl-layout-spacer"></div>
    <!-- Search-->
    <select id="device_select" onchange="change_device()" class="" name="" style="background:transparent;color:#d1d0cf">
      <option value="">Seleccin dispositivo</option>
      <?php foreach ($devices as $device ) { ?>
        <option value="<?php echo $device['device_id'] ?>" <?php if ($_SESSION['selected_device'] == $device['device_id']){echo "selected";} ?>><?php echo $device['device_alias']?></option>
      <?php } ?>
    </select>
    <!-- perfil-->
    <div class="avatar-dropdown" id="icon">
      <span><?php echo $_SESSION['user_name']; ?></span>
      <img src="<?php echo $_SESSION['user_image']; ?>">
    </div>
    <button id="more"
    class="mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">more_vert</i>
  </button>

  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp settings-dropdown"
  for="more">
  <a class="mdl-menu__item" href="https://github.com/CreativeIT/getmdl-dashboard/issues">
    cerrar seccion
  </a>
</ul>
</div>
</header>

<script type="text/javascript">
function change_device(){

  var device_id = $("#device_select").val();
  console.log(device_id);
  $.post("<?php echo base_url('devices/change_device'); ?>", {device_id: device_id}, function(result){
    location.reload();
  });
}
</script>
