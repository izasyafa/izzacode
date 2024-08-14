<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer classes
require '../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Enable verbose debug output
        $mail->SMTPDebug = 2; // or 3 for more detailed debugging

        // Server settings
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                             // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                     // Enable SMTP authentication
        $mail->Username = 'arkaassyafa00@gmail.com';                // SMTP username
        $mail->Password = 'Izzaassyafa123';                         // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                          // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('arkaassyafa00@gmail.com', 'Your Name');   // Add a recipient

        // Content
        $mail->isHTML(true);                                        // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = "<p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Message:</strong><br>{$message}</p>";

        // Send the email
        $mail->send();
        echo "<div class='sent-message'>Your message has been sent. Thank you!</div>";
    } catch (Exception $e) {
        echo "<div class='error-message'>Message could not be sent. Mailer Error: {$mail->ErrorInfo}</div>";
    }
}
?>
