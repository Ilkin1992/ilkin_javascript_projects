<?php
$timezone = new DateTimeZone('Europe/Riga');
$dateTime = new DateTime('now', $timezone);
$date = $dateTime->format('Y-m-d');
$time = $dateTime->format('H:i:s');

print("<h2>$date</h2>");
print("<h3>$time</h3>");
