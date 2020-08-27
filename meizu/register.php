<?php
		// 判断该手机号是否已经注册
	    header("Content-type:text/html;charset=utf-8");
	    $phone = $_POST["userphone"];
	    $conn = mysql_connect("localhost","root","root");
		mysql_select_db("user");
	    $result = mysql_query(("select * from users where userphone ='$phone'"),$conn);
	    $num = mysql_num_rows($result);
		if($num == "1"){
			echo "1";
		}else{
	        echo "0";
	    }
	    mysql_close($conn);
?>