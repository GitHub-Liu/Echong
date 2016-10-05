var txt = document.getElementById("txt");
var userName = document.getElementById("userName");  //获取用户名节点对象
userName.onfocus = userName.onblur = userName.onkeyup = checkUserName;
/*
 	验证用户名
 */
function checkUserName(e){
	var _e = window.event||e;
	var v = userName.value;  //用户名中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "数字、字母、_，长度不小于6位";
			return false;
		}
	}
	
	if(_e.type=="blur"){  //失去焦点事件
		if(v.length==0){
			txt.className = "txt hide";   //隐藏提示信息框
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.value = "用户名不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(regExpManger.userNameReg.test(v)){  //格式正确
			if(v.length>=6){  //长度正确
				txt.className = "txt hide";
				return true;
			}else{        //长度不正确
				txt.className = "txt";
				txt.value = "长度不够，不小于6位";
			}
		}else{
			txt.className = "txt";
			txt.value = "格式错误，仅支持数字、字母、_的组合";
			return false;
		}
	}
}

/*---------------------------------验证密码---------------------*/
var pwd = document.getElementById("pwd");  //获取设置密码节点对象
pwd.onfocus = pwd.onblur = pwd.onkeyup = checkPwd;
/*
 	验证设置密码
 */
function checkPwd(e){
	var _e = window.event||e;
	var v = pwd.value;  //设置密码框中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "建议两种以上符号，长度6-20位";
			return false;
		}
	}
	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "密码不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(v.length>=6&&v.length<=20){ //长度符合
			txt.className = "txt hide";
			return true;
		}else{  //长度不符合
			txt.className = "txt";
			txt.value = "长度只能在6-20个符号之间";
			return false;
		}
	}	
}

/*------------------------------确定密码--------------------------*/
/*
 	验证确认密码
 */
var pwd2 = document.getElementById("pwd2");  //获取设置密码节点对象
var ruo = document.getElementById("ruo");
var zhong = document.getElementById("zhong");
var qiang = document.getElementById("qiang");
pwd2.onfocus = pwd2.onblur = pwd2.onkeyup = checkPwd2;
/*
 	验证设置密码
 */
function checkPwd2(e){
	var _e = window.event||e;
	var v = pwd2.value;  //设置密码框中的内容
	var v1 = pwd.value;
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "请再次输入密码";
			return false;
		}
	}	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "重复密码不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(v1==v){
			txt.className = "txt hide";
			var leval = getLevel(v);
			switch(leval){
				case 1:
					ruo.className = "tip-ruo active";
					zhong.className = "tip-zhong";
					qiang.className = "tip-qiang";
					break;
				case 2:
					ruo.className = "tip-ruo";
					zhong.className = "tip-zhong active";
					qiang.className = "tip-qiang";
					break;
				default:
					ruo.className = "tip-ruo";
					zhong.className = "tip-zhong";
					qiang.className = "tip-qiang  active";
			}
			return true;
		}else{
			txt.className = "txt";
			txt.value = "两次密码输入不一致";
			return false;
		}
	}
}

/*计算密码安全级别*/
function getLevel(pwd){
	var leval = 0;  //级别
	var isHasWord = false;  //没有记录过
	var isHasNumber = false;  //没有记录过
	var isHasOther = false;   //没有记录过
	for(var i = 0;i<pwd.length;i++){
		//abc123&
		if(regExpManger.wordReg.test(pwd[i])){
			if(isHasWord){  //true
				continue;
			}else{   //
				isHasWord = true;
				leval+=1;
			}
		}else if(regExpManger.numReg.test(pwd[i])){
			if(isHasNumber){  //true
				continue;
			}else{   //
				isHasNumber = true;
				leval+=1;
			}
		}else{
			if(isHasOther){  //true
				continue;
			}else{   //
				isHasOther = true;
				leval+=1;
			}
		}
	}

	return leval; //级别
}

/*----------------邮箱验证---------------------------*/
var email = document.getElementById("email");  //获取用户名节点对象
email.onfocus = email.onblur = email.onkeyup = checkEmail;
/*
 	验证用户名
 */
function checkEmail(e){
	var _e = window.event||e;
	var v = email.value;  //邮箱中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "注册后，可以使用该邮箱登录或找回密码";
			return false;
		}
	}
	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "邮箱不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(regExpManger.emaiReg.test(v)){  //格式正确
			txt.className = "txt hide";
			return true;
		}else{
			txt.className = "txt";
			txt.value = "邮箱格式错误";
			return false;
		}
	}
}

var Name = document.getElementById("Name");  //获取用户名节点对象
Name.onfocus = Name.onblur = Name.onkeyup = checkName;
/*
 	验证用户名
 */
function checkName(e){
	var _e = window.event||e;
	var v = Name.value;  //真实姓名中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
		    txt.value = "支持汉字，长度2-8位";
			return false;
		}
	}
	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "真实姓名不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(regExpManger.NameReg.test(v)){  //格式正确
			if(v.length>=2&&v.length<=8){  //长度正确
				txt.className = "txt hide";
				return true;
			}else{        //长度不正确
				txt.className = "txt";
				txt.value = "长度不够，2-8位";
			}
		}else{
			txt.className = "txt";
		    txt.value = "格式错误";
			return false;
		}
	}
}
/*--------------------------验证手机号-------------------------------*/
var mobile = document.getElementById("mobile");  //获取用户名节点对象
mobile.onfocus = mobile.onblur = mobile.onkeyup = checkMobile;
/*
 	验证用户名
 */
function checkMobile(e){
	var _e = window.event||e;
	var v = mobile.value;  //手机号中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){   //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "注册后可用该号码登录或找回密码";
			return false;
		}
	}
	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "手机号不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		if(regExpManger.mobileReg.test(v)){  //格式正确
			txt.className = "txt hide";
			return true;
		}else{
			txt.className = "txt";
			txt.value = "格式错误";
			return false;
		}
	}
	
	
}

/*--------------------------验证验证码-------------------------------*/
var code = document.getElementById("code");  //获取用户名节点对象
code.onfocus = code.onblur = code.onkeyup  = checkCode;
function checkCode(e){
	var _e = window.event||e;
	var v = code.value;  //用户名中的内容
	//_e.type
	if(_e.type=="focus"){  //获取焦点事件
		if(v.length==0){  //文本框中的内容为空时，显示默认提示信息
			txt.className = "txt";
			txt.value = "验证码验证";
			return false;
		}
	}	
	if(_e.type=="blur"){
		if(v.length==0){
			txt.className = "txt hide";
			return false;
		}
	}
	
	/*其他情况（用户输入的时候或点击注册按钮的时候）*/
	if(v.length==0){  //文本框为空的情况下
		txt.className = "txt";
		txt.value = "验证码不能为空，请输入";
		return false;
	}else{  //文本框不为空的情况
		var code2 = document.getElementById("code2") //获取隐藏域节点对象。
		if(code.value==code2.value){  //格式正确
			txt.className = "txt hide";
			return true;
		}else{
			txt.className = "txt";
			txt.value = "验证码不一致";
			return false;
		}
	}
}

/*更换验证码*/
var updateCode = document.getElementById("updateCode");
var code2 = document.getElementById("code2"); //隐藏域节点对象
var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
/*点击验证码切换验证码并改变隐藏域的值*/
updateCode.onclick = function(){
	var str = "";
	for(var i = 0;i<4;i++){
		var index = parseInt(Math.random()*arr.length);
		str+=arr[index];
	}
	updateCode.innerHTML = str;
	code2.value = updateCode.innerHTML;
}

/*获取注册按钮*/
var btn = document.getElementById("btn");
btn.onclick = function(){
	var ck = document.getElementById("ck"); //协议节点对象
	var userName = document.getElementById("userName"); 
	var pwd = document.getElementById("pwd"); 	
	
	if(ck.checked){  //选中
		txt.className = "txt";
		if(checkUserName()&&checkPwd()&&checkPwd2()&&checkEmail()&&checkName()&&checkMobile()&&checkCode()){  
			alert("可以注册,且免登陆10天");
		}
		setCookie({
			name:"userName",
			value:userName.value,
			expires:new Date("2016/9/08")
		})
		setCookie({
			name:"pwd",
			value:pwd.value,
			expires:new Date("2016/9/08")
		})
	}else{//没有选中
		txt.className = "txt";
		if(checkUserName()&&checkPwd()&&checkPwd2()&&checkEmail()&&checkName()&&checkMobile()&&checkCode()){  
				alert("可以注册");
		}
	}
}


