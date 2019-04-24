


<?php
 
 // diesem file wird eine url mit bandnamen übergeben, das ein json-file von last.fm holt, mit dem profil.js arbeiten 
$bandname = $_GET["bandname"];
$method = $_GET["method"];


if($method == 1){
    $jsonurlband = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".$bandname."&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
    $jsonband = file_get_contents($jsonurlband);
    echo $jsonband;
}
if($method ==2){
    $jsonurl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=".$bandname."&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
    $jsontopalbums = file_get_contents($jsonurl);
    echo $jsontopalbums;
}
    
?>