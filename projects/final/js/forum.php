<?php

$username = $_POST['user'];
$input = $_POST['editor'];
//$date = $_POST['date'];
$date = date("F j, Y");  
$newline = "\n";
$title = "$date\n";
$wrap = wordwrap($input, 140, "\n", true);
$data = "$username: $wrap\n";
//open the file and choose the mode
$fh = fopen("../forum.txt", "a");

$file = file_get_contents('../forum.txt');
if(!strpos($file, $date)) { 
fwrite($fh, $title);
}
fwrite($fh, $data);

//close the file
fclose($fh);

echo("Thread Submitted");
echo("<p>");
echo('<a href="../forum.html">Back to forum</a>' ); 

?>

