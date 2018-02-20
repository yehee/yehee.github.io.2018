<?php
	if(isset($_POST['submit'])) {
		$to = "aliceykim0828@gmail.com";
		$subject = "Form Tutorial";
		$name_field = $_POST['firstname'];
		$email_field = $_POST['email'];
		$message = $_POST['message'];
 
		$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";
 
		echo "Data has been submitted to $to!";
		mail($to, $subject, $body);
	} else {
		echo "Bello!";
	}
?>
