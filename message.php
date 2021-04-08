<?php

  $name = $_POST['fullname'];
  $visitor_email = $_POST['email'];
  $subject = $POST['subject'];
  $message = $_POST['message'];
  mail(
      "matheoz8896@gmail.com",
      "$subject",
      "$message",
      "$visitor_email"
      )
?>