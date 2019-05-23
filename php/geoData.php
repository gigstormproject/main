<?php
$method = $_GET["method"];
$lat = $_GET["lat"];
$lng = $_GET["lng"];
$id = $_GET["id"];
$fourSquareClientID = "MK1YZUWALB3UKPYVKN1GUVLMOB5SW1S3XHG0K0ARYVHWDMZP";
//alternative id "WQALJINN2LGXVNLGCIONIFFHOPGUEOLSP0RYCR1XQUANU0JC";
$fourSquareClientSecret = "SCEKVQQKYQOZLPK3IHU2CCIFREMZCWR2TLPDILEU0GTC2ZMV";
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