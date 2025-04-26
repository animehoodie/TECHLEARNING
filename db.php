<?php
$host = "localhost";
$user = "root";
$password = ""; // default in XAMPP
$dbname = "my_database";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
