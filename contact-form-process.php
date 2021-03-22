<?php
if (isset($_POST['email'])) {

    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
    $captcha;
    
    

    $email_to = "emma@gamesasgaeilge.ie";
    $headers = "From: ".$email;
    $txt =  "You have a contact form submission from ".$name.".\n\n".$message;
    $email_subject = "New contact form submission";

    if(isset($_POST['g-recaptcha-response']))
    {
        $captcha=$_POST['g-recaptcha-response'];
    }
    if(!$captcha){
        echo '<h2>Please check the reCAPTCHA box.</h2>';
        exit;
    }
   
    
    
    $secretKey = "6LeOKIoaAAAAAPp8xW5Bi_xmSCC8uVzIpkHay8JE";
        $ip = $_SERVER['REMOTE_ADDR'];
        // post request to server
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response = file_get_contents($url);
        $responseKeys = json_decode($response,true);
        // should return JSON with success as true
        if($responseKeys["success"]) {
            mail($email_to,$email_subject,$txt, $headers,);
            echo "Go raibh maith agat!" . " -" . "<a href='index.html' style='text-align:center;  text-decoration:none;color:#ff0099;'> Return to Games as Gaeilge!</a>";
        } else {
                echo '<h2>error </h2>';
        }

}


?>




