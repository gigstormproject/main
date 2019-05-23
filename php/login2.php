<?php

include 'pdo_connect.php';

if(isset($_POST['uname']))
{
    $query = "SELECT `upassword` FROM `bar` WHERE `uname` = ?";
    $params = array($_POST['uname']);
    $results = dataQuery($query, $params);
}

$hash = $results[0]['upassword']; // first and only row if username exists;

$loggedIn = password_verify($_POST['upassword'], $hash);

if($loggedIn){
    session_start();
    $_SESSION["username"] = $_POST['uname'];
    $_SESSION["bandname"] = $_POST['bname'];
    setcookie("pub", $_POST['uname'], time() + (86400 * 30), "/");
    echo "
    <script>
    window.location.href='/pages/pub_profil.html';
    </script>
    ";
 }else{
    echo "  
    <script> alert('Wrong Username/Password');
    window.location = '../pages/index.html';
    </script>
    ";
 }
?>