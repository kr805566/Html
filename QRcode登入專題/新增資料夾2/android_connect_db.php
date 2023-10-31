<?php
$db = mysqli_connect("sql100.web.youp.ga","yuweb_21906440","bird080","yuweb_21906440_bird");



$sql = 'SELECT * FROM QRcode';
/*$sql = stripslashes($sql);*/
$res = mysqli_query($db,$sql);
while($r = mysql_fetch_assoc($res))
    $output[] = $r;

print(json_encode($output));

mysql_close();

?>