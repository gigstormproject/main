<?php
 
$bandname = $_GET["bandname"];
$method = $_GET["method"];
$id = $_GET["id"];


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

if($method ==3){
    $jsonurl = "http://api.songkick.com/api/3.0/search/artists.json?apikey=RSDEntdIucTr1N21&query=".$bandname;
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

if($method ==4){
    $jsonurl = "http://api.songkick.com/api/3.0/artists/".$id."/calendar.json?apikey=RSDEntdIucTr1N21";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

if($method ==5){
    $jsonurl = "http://api.deezer.com/search?q=artist:'".$bandname."'";
    $jsonband = file_get_contents($jsonurl);
    echo $jsonband;
}

if($method ==6){
    $jsonurl="http://api.deezer.com/artist/".$id;
    $jsonband = file_get_contents($jsonurl);
    echo $jsonband;
}
?>