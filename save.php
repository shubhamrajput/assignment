<?php
$conn = mysqli_connect('localhost', 'root', '', 'farmer');

$postdata = file_get_contents("php://input");
$request  = json_decode($postdata);

$sno     = mysqli_real_escape_string($conn, $request->sno);
$name    = mysqli_real_escape_string($conn, $request->name);
$age     = mysqli_real_escape_string($conn, $request->age);
$mandal  = mysqli_real_escape_string($conn, $request->mandal);
$village = mysqli_real_escape_string($conn, $request->village);
$query   = "INSERT INTO `user`(`sno`,`name`,`age`,`mandal`,`village`) VALUES('$sno','$name','$age','$mandal','$village')";
if (mysqli_query($conn, $query)) {
    echo "Success";
    mysqli_close($conn);
}




?>