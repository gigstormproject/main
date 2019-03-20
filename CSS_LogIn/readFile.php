<?php
  $file = 'contacts.json';  
  if (file_exists($file)) {
    $data = "";
    $data = file_get_contents("contacts.json");
    echo $data;
  }
  else
  {
    echo "Error";
  }
?>
    