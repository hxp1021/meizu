<?php
	//将详情页内容传到数据库
	header("content-Type: text/html; charset=utf-8");//字符编码设置
	// 创建连接
	$name = $_POST["name"];
	$color = $_POST["color"];
	$ram = $_POST["ram"];
	$photo = $_POST["photo"];
	$price = $_POST["price"];
	$conn = mysqli_connect("localhost","root","root","user");
	
	// 检测连接 
	if (mysqli_connect_errno()){ 
		echo "Failed to connect to MySQL: " . mysqli_connect_error(); 
	}
	$result = mysqli_query($conn,"SELECT * FROM shopcar WHERE goodsname ='$name'"); 
	$num = mysqli_num_rows($result);
	if($num == "1"){
		echo "1";
	}else{
		mysqli_query($conn,"insert into shopcar(goodsname,goodscolor,goodsram,goodsimg,goodsprice)values('$name','$color','$ram','$photo','$price')");
		echo "0";
	}
	mysqli_close($conn);
?>