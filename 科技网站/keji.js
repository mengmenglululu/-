window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}
	var target = 0,
		leader = 0,
		time = null;
	//	页面主体
	var i_zym = $("i_zym").getElementsByClassName("i_a");
	//	页面导航栏菜单
	var i_meau = $("i_meau").getElementsByTagName("li");
//	小圆点
     var i_xyd=$("i_xyd").getElementsByTagName("li");
	
	console.log(i_meau);
	for(var i = 0; i < i_meau.length; i++) {
		i_meau[i].index = i;
		i_xyd[i].index = i;
		i_meau[i].onclick = function() {
			clearInterval(time);
			var i_a=this.index;
			yundong(i_a);
		for(var j = 0; j < i_meau.length; j++) {
	     i_xyd[j].style.background="";
		 i_meau[j].style.color="rgb(0,71,197)";
		}
		i_meau[this.index].style.color="black";
		i_xyd[this.index].style.background="orange";
		
		}
	   i_xyd[i].onclick = function() {
			clearInterval(time);
			var i_a=this.index;
			yundong(i_a);
		for(var j = 0; j < i_xyd.length; j++) {
	     i_xyd[j].style.background="";
	     i_meau[j].style.color="rgb(0,71,197)";
	     }
		i_xyd[this.index].style.background="orange";
		i_meau[this.index].style.color="black";
	}
	
	
	
	
	}
//	页面滚动函数封装
	function yundong(i_a){
			target = i_zym[i_a].offsetTop;
			console.log(target);
			var time = setInterval(function() {
				if(leader > target - 1 && leader < target + 1) {
					console.log(leader);
					clearInterval(time);
				} else {
					leader = leader + (target - leader) / 10;
					window.scrollTo(0, leader);
				}
			}, 10)
	}
	

	var scrollFunc = function(event) {
		var x = event || window.event;
          var y = document.documentElement.scrollTop || document.body.scrollTop; 
		var t1 = document.getElementById("wheelDelta");
		var bodyheight = document.body.offsetHeight;
//		var target = bodyheight / 2;
        console.log(bodyheight);
		if(event.wheelDelta) { //IE/Opera/Chrome
			var a = event.wheelDelta; //向上为120，向下为-120
			if(a > 0) { //向上 
                document.body.scrollTop = document.body.scrollTop - bodyheight/2 ;
			}
			if(a < 0) { //向下
				document.body.scrollTop = document.body.scrollTop + bodyheight/2;
		   }
		}
	}
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	} //W3C   
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome  
}