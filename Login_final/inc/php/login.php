<?php

include 'pdo_connect.php';

if(isset($_POST['uname']))
{
    $query = "SELECT `upassword` FROM `band` WHERE `uname` = ?";
    $params = array($_POST['uname']);
    $results = dataQuery($query, $params);
}



$hash = $results[0]['upassword']; // first and only row if username exists;

$loggedIn = password_verify($_POST['upassword'], $hash);


if($loggedIn){
    session_start();

    $_SESSION["username"] = $_POST['uname'];
    $_SESSION["band"] = "ABBA";

    echo $_POST['uname'];
}
else {
    echo "fehler";
 }


?>