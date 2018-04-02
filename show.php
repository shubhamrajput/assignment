<?php

$conn = mysqli_connect('localhost', 'root', '', 'farmer');

$query = "SELECT * FROM `user`";
$res = mysqli_query($conn,$query);
$data = array();
$i = 0;
if(mysqli_num_rows($res) > 0)  
 {  
while ($row = mysqli_fetch_array($res)) {

	$data[] = array("sno"=>$row['sno'],"name"=>$row['name'],"age"=>$row['age'],"mandal"=>$row['mandal'],"village"=>$row['village']);
}
}


echo $json_format = json_encode($data);

?>