<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $priority = $_POST["priority"];

    // Perform further processing, validation, or send emails as needed
    echo "Form submitted successfully!<br>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Subject: $subject<br>";
    echo "Message: $message<br>";
    echo "Priority: $priority<br>";
}
?>
