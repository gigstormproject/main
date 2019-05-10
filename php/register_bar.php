<?php

include 'pdo_connect.php';

if(isset($_POST['submit']))
{
    $fullname = $_POST['fullname'];
    $barname = $_POST['barname'];
    $uname = $_POST['uname'];
    $upassword = password_hash($_POST['upassword'], PASSWORD_DEFAULT);
    $email = $_POST['email'];

    $query = 'INSERT INTO `bar` (`fullname`, `barname`, `uname`, `upassword`, `email`) VALUES (?,?,?,?,?)';
    $params = array($fullname, $barname, $uname, $upassword, $email);
    $results = dataQuery($query, $params);

    if($results==1){
        echo "<script>window.location = '../pages/register_success.html';
        </script>";
        }
}

?>