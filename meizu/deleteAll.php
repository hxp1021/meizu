<?php
	header("content-Type: text/html; charset=utf-8");//字符编码设置
	// 创建连接
	$conn = mysqli_connect("localhost","root","root","user");
	
	// 检测连接 
	if (mysqli_connect_errno()){ 
		echo "Failed to connect to MySQL: " . mysqli_connect_error(); 
	}
	//清空购物车数据库
	mysqli_query($conn,"DELETE FROM shopcar"); 
    echo "1";
	mysqli_close($conn);
?>