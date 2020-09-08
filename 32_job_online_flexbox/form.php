<?php 

// Извлекаем данные из формы, htmlspecialchars - используется против спама
$name = htmlspecialchars ($_POST['text']);
$email = htmlspecialchars ($_POST['email']);
$tel = htmlspecialchars ($_POST['tel']);
$message = htmlspecialchars ($_POST['message']);
$source = htmlspecialchars ($_POST['source']);
$content = htmlspecialchars ($_POST['content']);
$medium = htmlspecialchars ($_POST['medium']);
$campaign = htmlspecialchars ($_POST['campaign']);
$term = htmlspecialchars ($_POST['term']);

//*  Запись в тектовый файл */
// $file = "contact.csv";
// $contact = $source. ";" .$medium. ";" .$campaign. ";" .$content. ";" .$term. ";" .$email. ";" .$tel. ";" .$name. ";" . "\n";
// file_put_contents($file, $contact, FILE_APPEND);


// Формируем заголовки письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";
// $headers .= "From: <socsetbus@mail.ru>\r\n";
// $headers .= "Reply-To: socsetbus@mail.ru\r\n";

// Составляем текст письма админу
$message = "<p>Создана новая заявка с адаптивного сайта!</p>
<p>Имячко: $name</p>
<p>Телефончик: $tel</p>
<p>E-mail'чик: $email</p>
<p>Сообщеничко: $message</p>";
// <p>----------</p>
// <p>Источник: $source</p>
// <p>Кампания: $campaign</p>
// <p>Содержание: $content</p>
// <p>Тип трафика: $medium</p>
// <p>Ключевое слово: $term</p>";

// Отсылаем письмо админу
mail( "socsetbus@mail.ru", "Новая заявка с адаптивного сайта", $message, $headers );

// Отправляем пользователя на страницу "Спасибо"
header( "Location: 7_spasibo.html");
?>