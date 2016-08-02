<?php    
 	require('mysql_util.php');
	
	$pageNumer = $_GET['p'];
	$size = 5;
	$pageNumber=($pageNumer-1)*$size;
	$sql = 'SELECT s.id,s.name,s.gender,s.address FROM student AS S lIMIT '.$pageNumber.','.$size;
	$d = db_execute($sql,function($r){
		$r -> setFetchMode(PDO::FETCH_OBJ);
		return $r->fetchAll();
	});
	echo json_encode($d);
 
 
?>