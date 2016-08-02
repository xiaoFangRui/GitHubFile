<?php 
require('mysql_util.php');
$count = db_execute('SELECT count(0) FROM student',function($r){
	$d = $r->fetch();
	return $d[0];
});
echo $count;
//echo json_encode($count);


 
?>