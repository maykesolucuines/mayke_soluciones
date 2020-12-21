<?php

$user = $_POST ['user'];
$pass = $_POST ['pass'];

require_once ('dashboard.html');
echo "
  usuario = '$user';
  contrasena = '$pass';
";
?>
