<?php
/*
 * SOURCE: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
 */

require 'PHPMailer/PHPMailerAutoload.php';

/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$fromEmail = 'demo@domain.com';
$fromName = 'Demo contact form';

// an email address that will receive the email with the output of the form
$sendToEmail = 'aliceykim0828@gmail.com';
$sendToName = 'Demo contact form';

// subject of the email
$subject = 'New message from contact form';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message');

// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

$mail = new PHPMailer;

$mail->setFrom($fromEmail, $fromName);
$mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();
$mail->addReplyTo($from);

if(!$mail->send()) {
    throw new \Exception('I could not send the email.' . $mail->ErrorInfo);
}