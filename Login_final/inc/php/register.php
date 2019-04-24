<?php

include 'pdo_connect.php';

if(isset($_POST['submit']))
{
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $uname = $_POST['uname'];
    $upassword = password_hash($_POST['upassword'], PASSWORD_DEFAULT);
    $email = $_POST['email'];

    $query = 'INSERT INTO `users` (`fname`, `lname`, `uname`, `upassword`, `email`) VALUES (?,?,?,?,?)';
    $params = array($fname, $lname, $uname, $upassword, $email);
    $results = dataQuery($query, $params);

    // for testing only
    echo 1 == $results ? 'success' : 'failure';
}

?>
