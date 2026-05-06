<?php
$host = "localhost";
$user = "root";
$pass = "";
$db_name = "plant_shop_db";

$conn = mysqli_connect($host, $user, $pass, $db_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = mysqli_real_escape_string($conn, $_POST['Name']);
    $email = mysqli_real_escape_string($conn, $_POST['Email']);
    $password = $_POST['password']; 
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        die("Error: Passwords do not match.");
    }

    $sql = "INSERT INTO users (username, email, password) VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Registration Successful!'); window.location.href='../Login/login.html';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>