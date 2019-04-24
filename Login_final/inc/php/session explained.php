
<?php
    session_start();

    if(isset($_SESSION["username"]))
    {
        echo "Loged in";
    }
    else
    {
        echo "not logged in";
    }
?>

in php file aus sessionvariable cookie mit variable machen in in search.js diese variable nehmen;
