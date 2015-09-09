<?php

function contactUs(){

    $to      = 'luke@chapmanbuilt.com.au';
    //$to      = 'kym@lie.lv';
    $subject = 'Urgent : Website enquiry';
    $stringData = "Name: " . $_GET['name'] . "\r\n";
    $stringData = $stringData . "Email: " . $_GET['email'] . "\r\n";
    $stringData = $stringData . "Organisation: " . $_GET['org'] . "\r\n";
    $stringData = $stringData . "Phone: " . $_GET['phone'] . "\r\n";
    $stringData = $stringData . "Message: " . $_GET['message'] . "\r\n";
    $headers = 'From: ' . $_GET['email'] . " \r\n" .
        'Reply-To: ' . $_GET['email'] . " \r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $stringData, $headers);

    return "Thank you, we'll be in touch.";

}

// If being called via ajax, autorun the function
if (isset($_GET['ajax'])) {
    if($_GET['ajax']){ echo contactUs(); }
}
?>
