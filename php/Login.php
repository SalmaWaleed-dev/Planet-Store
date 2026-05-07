<?php
session_start(); 

$host = "localhost";
$user = "root";
$pass = "";
$db_name = "plant_shop_db";

$conn = mysqli_connect($host, $user, $pass, $db_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = mysqli_real_escape_string($conn, $_POST['Email']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        
        if (password_verify($password, $row['password'])) {
            
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];

            echo "<script>alert('Welcome back, " . $row['username'] . "!'); window.location.href='../index.html';</script>";
        } else {
            echo "<script>alert('Invalid Email or Password!');</script>";
        }
    } else {
        echo "<script>alert('No user found with this email!');</script>";
    }
}

mysqli_close($conn);
?>