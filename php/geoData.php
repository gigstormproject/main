<?php
$method = $_GET["method"];
$lat = $_GET["lat"];
$lng = $_GET["lng"];
$id = $_GET["id"];
$fourSquareClientID = "IKPMVA2LFCQG3E0KMOM5RCBNY43Z4XHETHOY4O1SRETDYLTA";
//alternative id "WQALJINN2LGXVNLGCIONIFFHOPGUEOLSP0RYCR1XQUANU0JC";
$fourSquareClientSecret = "KS2NMPHTTXUKCQGRRPCSQSHFM1FEIDF1OMWP1L1DGPH5W01K";
//alternative client secret:"3W33YUADEHYJPAGZTOLAWPUDSUAHYGOMHZDK3FHEO1AKCJIV";


if($method ==1){
    $jsonurl = "http://api.foursquare.com/v2/venues/search?ll=".$lat.",".$lng."&client_id=".$fourSquareClientID."&client_secret=".$fourSquareClientSecret."&v=20190522";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}

if($method ==2){
    $jsonurl = "http://api.foursquare.com/v2/venues/".$id."?&client_id=".$fourSquareClientID."&client_secret=".$fourSquareClientSecret."&v=20190522";
    $jsontest = file_get_contents($jsonurl);
    echo $jsontest; 
}
?>