<?php
    //Log out the user by unsetting the session cookie
    unset($_SESSION['login']);
    header("Location: index.php");
?>