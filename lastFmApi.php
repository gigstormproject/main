


<?php
//hier bandname definieren
$bandname = $_GET["bandname"];


$jsonurl = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".$bandname."&api_key=ea0a169d4f3342854c812231aeb01315&format=json";
$json = file_get_contents($jsonurl);
//echo $json;
$obj = json_decode($json);

echo "</p>";

//print $obj->{'artist'}->{'name'};

//echo "</p>";

$picture = $obj->{'artist'}->{'image'}[3]->{'#text'};

echo $picture;

//echo "<img src='" .  $picture . "' alt='Italian Trulli'>";
?>