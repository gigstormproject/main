<?php

include 'pdo_connect.php';

if(isset($_POST['uname']))
{
    $query = "SELECT `upassword` FROM `users` WHERE `uname` = ?";
    $params = array($_POST['uname']);
    $results = dataQuery($query, $params);
}

$hash = $results[0]['upassword']; // first and only row if username exists;

echo password_verify($_POST['upassword'], $hash) ? 'password correct' : 'password incorrect';

?>