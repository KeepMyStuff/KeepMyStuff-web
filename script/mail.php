<?php
 $to = "keepmystuff.tag@gmail.com";
 $subject = "Message from keepmystuff.it";

 $body .= "From: " . trim(stripslashes($_POST["name"])) . "\n";
 $body .= "e-mail: " . trim(stripslashes($_POST["email"])) . "\n";
 $body .= "Subject: " . trim(stripslashes($_POST["subject"])) . "\n";
 $body .= "Message: " . trim(stripslashes($_POST["message"])) . "\n";

 $headers = "Direct message from keepmystuff.it";
 
 mail($to, $subject, $body, $headers);
?>