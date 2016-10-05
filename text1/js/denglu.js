/*获取登录按钮*/
var btn = document.getElementById("btn");
var ck = document.getElementById("ck"); //自动登录节点对象
var tip = document.getElementById("tip"); //信息提示节点对象
/*给ck复选框添加点击事件*/
ck.onclick = function(){
	var userName = document.getElementById("userName"); 
	var pwd = document.getElementById("pwd"); 
	var cName = userName.value;
	if(ck.checked){  //选中
		var name = getCookie("userName");
		var pwd2 = getCookie("pwd");
		if(userName.value==name){
			pwd.value = pwd2;
		}else{
			alert("没有该用户名");
		}
	
	}else{//没有选中
		pwd.value = "";
		userName.value = "";
	}
}
/*给登录按钮添加点击事件*/
btn.oncklick = function(){
}
