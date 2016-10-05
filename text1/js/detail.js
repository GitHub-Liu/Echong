/*
		思路：
		第一步：加载完后，获取需要操作的节点对象
		第二步：给所有小图片添加移入事件，完成对应的切换小图片，图片，大图片
		第三步：给图片的容器添加移入、移出事件，完成对应图片、大图片放大效果
	*/

	var ssimgs = document.querySelectorAll(".ssbox .container .container-box img"); //获取所有小图片节点对象
	var containerBox = document.querySelector(".ssbox .container .container-box"); //获取所有小图片容器节点对象
	var simgs = document.querySelectorAll(".sbox img"); //获取所有图片节点对象
	var imgs = document.querySelectorAll(".box img"); //获取所有大图片节点对象
	var tool = document.getElementById("tool");  //获取要放大区域的节点对象
	var sBox = document.getElementById("sBox");  //获取图片的容器节点对象
	var box = document.getElementById("box");    //获取大图片的容器节点对象
	var btn1 = document.getElementById("btn1"); //获取按钮节点
	var btn2 = document.getElementById("btn2"); //获取按钮节点
	var count = 0;
	var long = 60;
	btn1.onclick = function(){
		count++;
		if(count>7){
			count = 7;
			var x = containerBox.offsetLeft;
			containerBox.style.left = x + "px";
		}else{
			var x = containerBox.offsetLeft - long;
			containerBox.style.left = x + "px";
			console.log(containerBox.style.left);
		}	
	}	
	btn2.onclick = function(){
		count--;
		if(count<0){
			count = 0;
			var x = containerBox.offsetLeft;
			containerBox.style.left = x + "px";
		}else{
			var x = containerBox.offsetLeft + long;
			containerBox.style.left = x + "px";
			console.log(containerBox.style.left);
		}		
	}
	var moveIndex = 0;
	for(var i = 0,len = ssimgs.length;i<len;i++){ //循环遍历给所有小图片添加移进事件
		ssimgs[i].index = i;  //记录每次循环的对应坐标
		ssimgs[i].onmouseenter = function(){   //所有小图片添加移入事件
			for(var j = 0,len = ssimgs.length;j<len;j++){ //循环遍历杀死以前的效果
				ssimgs[j].className = "";
				simgs[j].className = "";
				imgs[j].className = "";	
			}
			this.className = "active";    
			simgs[this.index].className = "active";
			imgs[this.index].className = "active";  
			moveIndex = this.index;
		}
	}
	sBox.onmouseenter = function(){   //图片的容器添加移入事件
		tool.className = "tool active";
		box.className = "box active";
	}
	sBox.onmouseleave = function(){ //图片的容器添加移出事件
		tool.className = "tool";
		box.className = "box";
	}
	sBox.onmousemove = function(e){
		var _e = window.event||e;
		var x = _e.clientX - sBox.offsetLeft - tool.offsetWidth/2;
		var y = _e.clientY - sBox.offsetTop - tool.offsetHeight/2;
		if(x<0){
			x = 0;
		}
		if(y<0){
			y = 0;
		}
		if(x>sBox.offsetWidth-tool.offsetWidth-3){
			x = sBox.offsetWidth-tool.offsetWidth-3;
		}
		if(y>sBox.offsetHeight-tool.offsetHeight-3){
			y = sBox.offsetHeight-tool.offsetHeight-3;
		}
		tool.style.left = x + "px";
		tool.style.top = y + "px";
		imgs[moveIndex].style.left = -2*x + "px";
		imgs[moveIndex].style.top = -2*y + "px";
	}
 