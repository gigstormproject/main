<?php
 
 $bandname = $_GET["bandname"];

$jsonurl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=".$bandname."&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
$jsontopalbums = file_get_contents($jsonurl);

echo $jsontopalbums;

?>