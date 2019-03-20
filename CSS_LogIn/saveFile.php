<?php
  $file = 'contacts.json';
  $obj->name = $_POST['name'];
  $obj->email=$_POST['email'];
  $obj->website=$_POST['website'];

  if (isset($_POST['comment'])){
    $obj->comment=$_POST['comment'];
  }
  else {
    $obj->comment="";
  }
  if (isset($_POST['gender'])){
    $obj->gender=$_POST['gender'];
  }
  else {
    $obj->gender="";
  }
  
  $data = json_encode($obj);
  
  if(!file_exists($file)) {
    file_put_contents($file,json_encode(array(json_decode($data))));                          
  } else {
    $content = file_get_contents($file);
    $dec = json_decode($content);
    array_push($dec, json_decode($data));
    file_put_contents($file,json_encode($dec));  
  }
  header("Location: index.php");
?>