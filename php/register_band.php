<?php

include 'pdo_connect.php';

if(isset($_POST['submit']))
{
    $uname = $_POST['uname'];
    $email = $_POST['email'];
    $genre = $_POST['genre'];
    $upassword = password_hash($_POST['upassword'], PASSWORD_DEFAULT);

    $query = 'INSERT INTO `band` (`uname`, `email`, `genre`, `upassword`) VALUES (?,?,?,?)';
    $params = array($uname, $email, $genre, $upassword);
    $results = dataQuery($query, $params);

    echo 1 == $results ? 'success' : 'failure';

    if($results==1){
    echo "<script>window.location = '../pages/register_success.html';
    </script>";
    }
}

?>
