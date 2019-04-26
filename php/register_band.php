<?php

include 'pdo_connect.php';

if(isset($_POST['submit']))
{
    $bname = $_POST['bname'];
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $genre = $_POST['genre'];
    $upassword = password_hash($_POST['upassword'], PASSWORD_DEFAULT);

    $query = 'INSERT INTO `band` (`bname`, `uname`, `email`, `genre`, `upassword`) VALUES (?,?,?,?,?)';
    $params = array($bname, $uname, $email, $genre, $upassword);
    $results = dataQuery($query, $params);

    
    echo 1 == $results ? 'success' : 'failure';
}

?>
