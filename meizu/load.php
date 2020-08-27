<?php
		// 判断该手机号是否在数据库
	    header("Content-type:text/html;charset=utf-8");
	    $phone = $_POST["userphone"];
	    $pwd = $_POST["userpwd"];
	    $conn = mysqli_connect("localhost","root","root","user");
	    $result = mysqli_query($conn,("select * from users where userphone ='$phone'and userpwd ='$pwd'"));
	    $num = mysqli_num_rows($result);
		if($num == "1"){
			echo "1";
		}else{
	        echo "0";
	    }
	    mysqli_close($conn);
?>