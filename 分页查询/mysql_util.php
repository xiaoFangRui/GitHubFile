<?php 
require('mysql_config.php');

function db_execute($sql,$success){
	$pdo = new PDO($GLOBALS['$MYSQL_CONFIG'],$GLOBALS['USERNAME'],$GLOBALS['PASSWORD']);
	$r = $pdo->query($sql);
//	$r -> setFetchMode(PDO::FETCH_OBJ);
	$d = $success($r,$pdo);
	return $d;
}

function db_select_one($sql){
	$d = db_execute($sql,function($r){
		return $r -> fetchObject();
	});
	return $d;
}

function my_select_all(){
	
}

function db_inset($sql,$success){
	$pdo = new PDO($GLOBALS['$MYSQL_CONFIG'],$GLOBALS['USERNAME'],$GLOBALS['PASSWORD']);
    $r = $pdo->exec($sql);
    $d = $success($r,$pdo);
    return $d;
}

?>