<?php
if (isset($_POST['email'])) {

    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
    

    $email_to = "emma@gamesasgaeilge.com";
    $headers = "From: ".$email;
    $txt =  "You have a contact form submission from ".$name.".\n\n".$message;
    $email_subject = "New contact form submission";

   
    mail($email_to,$email_subject,$txt, $headers);
    echo "Go raibh maith agat!" . " -" . "<a href='index.html' style='text-align:center;  text-decoration:none;color:#ff0099;'> Return to Games as Gaeilge!</a>";
    

}
?>




