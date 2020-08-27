<?php
		//将账号与密码存入数据库
	    header("Content-type:text/html;charset=utf-8");
	    $phone = $_POST["userphone"];
	    $pwd = $_POST["userpwd"];
	    $conn = mysql_connect("localhost","root","root");
		mysql_select_db("user");
		$result = mysql_query(("select * from users where userphone ='$phone'"),$conn);
		$num = mysql_num_rows($result);
		if($num == "1"){
			echo "1";
		}else{
			mysql_query("insert into users (userphone,userpwd)values('$phone','$pwd')",$conn);
			echo "0";
		}
	    mysql_close($conn);
?>