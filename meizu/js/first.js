$(function(){
		let index = 0;
		let time = null;
		$(".banner-ol-li").click(function(){
			index = $(this).index();
			change();
		});
	
		time = setInterval(() => {
			index++;
			change();
		}, 2000);
	
		function change(){
			$(".banner-ol-li").css("backgroundColor","#fff").eq(index).css({"backgroundColor":"transparent","border":"1px solid #fff"});
			if(index == $(".banner-ol-li").length){
				$(".banner-ol-li").eq(0).css({"backgroundColor":"transparent","border":"1px solid #fff"})
			}
			$(".banner-1-ul").animate({
				left: -2560 * index
			},500,function(){
				if(index == $(".banner-ol-li").length){
					index = 0;
					$(".banner-1-ul").css("left","0");
				}
			})
		}
		
		//头部导航
		$(".nav-a").mouseover(function(){
			$(".icon-ren-ul-1").css("display","none");
			$(".icon-ren-ul-2").css("display","none");
			$(".icon-gouwuche-ul-1").css("display","none");
			$(".icon-gouwuche-ul-2").css("display","none");
			if($(this).index() == 0 || $(this).index() == 1 || $(this).index() == 2 || $(this).index() == 3){
				$("header").css({"backgroundColor":"#fff","height":"260"});
				$(".nav-menu-last").css({"height":0,"display":"none"});
				$(".nav-menu").stop(true,false).css("display","none").eq($(this).index()).css({"height":180}).fadeIn();
			}else if($(this).index() == 9){
				$("header").css({"backgroundColor":"#fff","height":"385"});
				$(".nav-menu").stop(true,false).css("display","none").css({"height":0});
				$(".nav-menu-last").css({"height":"300"}).fadeIn()
			}else{
				$("header").css({"backgroundColor":"","height":"80"});
				$(".nav-menu").stop(true,false).css("display","none").css({"height":0});
				$(".nav-menu-last").css({"height":0,"display":"none"})
			}
		})
		$(".nav-menu-li").mouseenter(function(){
			$(this).css("opacity","1").siblings("li").css("opacity","0.5")
		})
		$("header").mouseleave(function(){
			$(".icon-ren-ul-1").css("display","none");
			$(".icon-ren-ul-2").css("display","none");
			$(".icon-gouwuche-ul-1").css("display","none");
			$(".icon-gouwuche-ul-2").css("display","none");
			$("header").css({"backgroundColor":"","height":"80"});
			$(".nav-menu").fadeOut().css({"height":0});
			$(".nav-menu-last").css({"height":0,"display":"none"})
		})
		
		$(".icon-ren").mouseover(function(){
			$(".icon-gouwuche-ul-1").css("display","none");
			$(".icon-gouwuche-ul-2").css("display","none");
			$(".nav-menu").fadeOut().css({"height":0});
			$(".nav-menu-last").css({"height":0,"display":"none"});
			$("header").css({"backgroundColor":"","height":"80"});
			if(localStorage["phone"] == undefined && sessionStorage["phone"] == undefined){
				$(".icon-ren-ul-1").css("display","block");
			}
			if(localStorage["phone"] != undefined || sessionStorage["phone"] != undefined){
				$(".icon-ren-ul-2").css("display","block");
			}
			$("#exit").click(function(){
				console.log(1);
				localStorage.clear();
				sessionStorage.clear();
				alert("退出成功");
				window.location.reload();
			})
		})
		$(".icon-gouwuche").mouseover(function(){
			$(".icon-ren-ul-1").css("display","none");
			$(".icon-ren-ul-2").css("display","none");
			$(".nav-menu").fadeOut().css({"height":0});
			$(".nav-menu-last").css({"height":0,"display":"none"});
			$("header").css({"backgroundColor":"","height":"80"});
			if(localStorage["phone"] == undefined && sessionStorage["phone"] == undefined){
				$(".icon-gouwuche-ul-1").css("display","block");
			}
			if(localStorage["phone"] != undefined || sessionStorage["phone"] != undefined){
				$(".icon-gouwuche-ul-2").css("display","block");
			}
		})

		
		//引入底部
		
	})
	