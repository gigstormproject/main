


<?php
 
 // diesem file wird eine url mit bandnamen übergeben, das ein json-file von last.fm holt, mit dem profil.js arbeiten 
$bandname = $_GET["bandname"];

$jsonurlband = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".$bandname."&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
$jsonband = file_get_contents($jsonurlband);

echo $jsonband;
?>