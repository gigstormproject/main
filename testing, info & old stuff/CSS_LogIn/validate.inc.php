<?php
    // Use htmlspecialchars in order to prevent XSS Attacks!!!
    $userlogin=htmlspecialchars($_POST['username']);
    $password=htmlspecialchars($_POST['password']);

    // Add Username/Password Validation either through DB or through File
    define('MYSQL_USER', 'root');
    define('MYSQL_PASSWORD', '');
    define('MYSQL_HOST', 'localhost');
    define('MYSQL_DATABASE', 'db_gigstorm');
    $pdoOptions=array
    (
        PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES=>false
    );

    $pdo=new PDO
    (
        "mysql:host=" . MYSQL_HOST . ";dbname=" . MYSQL_DATABASE,
        MYSQL_USER, // Username
        MYSQL_PASSWORD, // Password
        $pdoOptions // Options
    );

    // Retrieve the user account information for the given username
    $sql="SELECT id, username, password FROM users WHERE username=:username";
    $stmt=$pdo->prepare($sql);
    // Bind value. Always work with bind values in order to prevent SQL-injection attacks!
    $stmt->bindValue(':username', $userlogin);
    $stmt->execute();
    //Fetch row.
    $user=$stmt->fetch(PDO::FETCH_ASSOC);
    //If $row is FALSE.
    if($user===false)
    {
        echo "<h2>Incorrect Data</h2>\n";
        // header("Location: index.php");
    }
    else
    {
        // User found, so check password and set $_SESSION[login] if successful
        // Note: I used plain text password
        if ($password==$user['password'])
        {
            echo "<h2>Welcome " . $userlogin . " to the program</h2>\n";
            // Set the Session Cookie in order to identify the user
            $_SESSION['login']=$userlogin;
            // header("Location: index.php");
        }
        else
        {
            echo "<h2>Incorrect Data</h2>\n";
            // header("Location: index.php");
        }
    }

    // Hardcoded password verification
    if ($userlogin==="Jochen" && $password=="Hense")
    {
        echo "<h2>Welcome " . $userlogin . " to the program </h2>\n";
        // Set the Session Cookie in order to identify the user
        $_SESSION['login']=$userlogin;
        header("Location: index.php");
    }
    else
    {
        echo "<h2>Login unsuccessful</h2>\n";
        // header("Location: index.php");
    }
?>