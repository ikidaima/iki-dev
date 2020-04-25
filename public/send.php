<?php

$to = "d_bulychev@bk.ru";; // Здесь нужно написать e-mail, куда будут приходить письма
$first_name = $_POST['name'];
$phone = $_POST['phone']; // this is the sender's Email address
$subject = "Форма отправки сообщений с сайта";
$message = $first_name . " оставил сообщение:" . "\n\n" . $phone;

mail($to,$subject,$message);
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://iki-dev.ru");}
window.setTimeout("changeurl();",3000);
</script>