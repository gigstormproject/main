<?php
 
$searchTerm = $_GET["searchterm"];
$method = $_GET["method"];
$id = $_GET["id"];
$fourSquareClientID = "WQALJINN2LGXVNLGCIONIFFHOPGUEOLSP0RYCR1XQUANU0JC";
$fourSquareClientSecret = "3W33YUADEHYJPAGZTOLAWPUDSUAHYGOMHZDK3FHEO1AKCJIV";


if($method == 1){
    $jsonurlband = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";
    $urlpart2 = "&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
    $jsonband = file_get_contents($jsonurlband .urlencode($searchTerm). $urlpart2);
    echo $jsonband;
}
if($method ==2){
    $jsonurl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=";
    $urlpart2 = "&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
    $jsontopalbums = file_get_contents($jsonurl . urlencode($searchTerm). $urlpart2);
    echo $jsontopalbums;
}

if($method ==3){
    $jsonurl = "http://api.songkick.com/api/3.0/search/artists.json?apikey=RSDEntdIucTr1N21&query=";
    $jsontest = file_get_contents($jsonurl. urlencode($searchTerm));
    echo $jsontest; 
}

if($method ==4){
    $jsonurl = "http://api.songkick.com/api/3.0/artists/".$id."/calendar.json?apikey=RSDEntdIucTr1N21";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

if($method ==5){
    $jsonurl = "http://api.deezer.com/search/artist?q=";
    $jsonband = file_get_contents($jsonurl . urlencode($searchTerm));
    echo $jsonband;
}

if($method ==6){
    $jsonurl="http://api.deezer.com/artist/".$id."/related";
    $jsonband = file_get_contents($jsonurl);
    echo $jsonband;
}

if($method ==7){
    $jsonurl = "http://api.songkick.com/api/3.0/search/venues.json?apikey=RSDEntdIucTr1N21&query=";
    $jsontest = file_get_contents($jsonurl. urlencode($searchTerm));
    echo $jsontest; 
}

if($method ==8){
    $jsonurl = "http://api.songkick.com/api/3.0/venues/".$id."/calendar.json?apikey=RSDEntdIucTr1N21";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

if($method ==9){
    $jsonurl = "http://api.songkick.com/api/3.0/venues/".$id.".json?apikey=RSDEntdIucTr1N21";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}
if($method ==10){
    $jsonurl = "http://api.foursquare.com/v2/venues/search?ll=".$id."&client_id=".$fourSquareClientID."&client_secret=".$fourSquareClientSecret."&v=20190522";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

?>