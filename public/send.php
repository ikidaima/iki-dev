<?php header("Content-Type: text/html; charset=utf-8");?>

<?php

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";

$to = "d_bulychev@bk.ru";; // Здесь нужно написать e-mail, куда будут приходить письма
$first_name = $_POST['name'];
$phone = $_POST['phone']; // this is the sender's Email address
$subject = "Форма отправки сообщений с сайта";
$message = $first_name . " оставил сообщение:" . "\n\n" . $phone;

mail($to,$subject,$message,$headers);
echo "Сообщение отправлено";
?>