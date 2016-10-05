
$(function(){
    /*--------------------------手机号验证-------------------------------*/
    $("#phone").blur(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if($val.length==0){//文本框为空的情况
            $(this).addClass("error");
            $div02.show();
            $div02.find("span").html("请输入11位电话号码");
        }
    }).keyup(function(){
            var $val = $(this).val();
            var $div01 = $(this).next();
            var $div02 = $(this).next().next();
            if(regExpManger.phoneReg.test($val)){  //格式正确
                $(this).removeClass("error");
                $div02.hide();
                $div01.show();
            }else{
                $(this).addClass("error");
                $div01.hide();
                $div02.show();
                $div02.find("span").html("请输入11位电话号码");
            }
    });
    /*------------------------动态验证码验证-----------------------------*/
    $.get("../json/login01.json",function(data){
            var index = parseInt(Math.random()*data.length);
            var html = "";
            html="<img id=\""+data[index].value+"\" src=\""+data[index].img+"\"  title=\"看不清?换一张\"/>";
            $(".yzm01-get>div").html(html);
            $("#tab").click(function(){
                var index = parseInt(Math.random()*data.length);
                var html = "";
                html="<img id=\""+data[index].value+"\" src=\""+data[index].img+"\"  title=\"看不清?换一张\"/>";
                $(".yzm01-get>div").html(html);
                $(".yzm01-get>a>img").addClass("active").delay(1000).removeClass("active");
            });
            $("#yzm01").blur(function(){
                var $val = $(this).val();
                var $div01 = $(this).next().next();
                var $div02 = $(this).next().next().next();
                if($val.length==0){//文本框为空的情况
                    $(this).addClass("error");
                    $div02.show();
                    $div02.find("span").html("请输入4位验证码");
                }
            }).keyup(function(){
                var $id = $(".yzm01-get>div>img").attr("id");
                var $val = $(this).val();
                var $div01 = $(this).next().next();
                var $div02 = $(this).next().next().next();
                if(regExpManger.yzm01Reg.test($val)&&$id==$val){  //格式正确
                    $(this).removeClass("error")
                    $div02.hide();
                    $div01.show();
                }else{
                    $(this).addClass("error");
                    $div01.hide();
                    $div02.show();
                    $div02.find("span").html("请输入4位验证码");
                }
            });
        });
    /*------------------------短信验证码验证-----------------------------*/
    $("#yzm02").blur(function(){
        var $val = $(this).val();
        var $div01 = $(this).next().next();
        var $div02 = $(this).next().next().next();
        if($val.length==0){//文本框为空的情况
            $(this).addClass("error");
            $div02.show();
            $div02.find("span").html("请输入短信验证码");
        }
    }).keyup(function(){
        var $val = $(this).val();
        var $div01 = $(this).next().next();
        var $div02 = $(this).next().next().next();
        if(regExpManger.yzm02Reg.test($val)){  //格式正确
            $(this).removeClass("error");
            $div02.hide();
            $div01.show();
        }else{
            $(this).addClass("error");
            $div01.hide();
            $div02.show();
            $div02.find("span").html("请输入短信验证码");
        }
    });
    /*--------------------------用户名验证-------------------------------*/
    $("#uName").blur(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if($val.length==0){//文本框为空的情况
            $(this).addClass("error");
            $div02.show();
            $div02.find("span").html("请输入4-20位用户名");
        }
    }).keyup(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if(regExpManger.uNameReg.test($val)){  //格式正确
            $(this).removeClass("error");
            $div02.hide();
            $div01.show();
        }else{
            $(this).addClass("error");
            $div01.hide();
            $div02.show();
            $div02.find("span").html("请输入4-20位用户名");
        }
    });
    /*---------------------------密码验证----------------------------------*/
    $("#pwd01").blur(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if($val.length==0){//文本框为空的情况
            $(this).addClass("error");
            $div02.show();
            $div02.find("span").html("请输入8-20位密码");
        }
    }).keyup(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();

        if($val.length>=8&&$val.length<=20){ //长度符合
            $(this).removeClass("error");
            $div02.hide();
            $div01.show();
        }else{
            $(this).addClass("error");
            $div01.hide();
            $div02.show();
            $div02.find("span").html("请输入8-20位密码");
            var leval = getLevel($val);
            switch(leval){
                case 1:
                    $(".leval-ruo").addClass("active");
                    break;
                case 2:
                    $(".leval-ruo").addClass("active");
                    $(".leval-zhong").addClass("active");
                    break;
                default:
                    $(".leval-ruo").addClass("active");
                    $(".leval-zhong").addClass("active");
                    $(".leval-qiang").addClass("active");
            }

        }
    });
    /*-----------------------计算密码安全级别-------------------------------*/
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
    /*--------------------------确认密码验证-------------------------------*/
    $("#pwd02").blur(function(){
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if($val.length==0){//文本框为空的情况
            $(this).addClass("error");
            $div02.show();
            $div02.find("span").html("请输入确认密码");
        }
    }).keyup(function(){
        var $val01 = $("#pwd01").val();
        var $val = $(this).val();
        var $div01 = $(this).next();
        var $div02 = $(this).next().next();
        if($val01==$val){  //格式正确
            $(this).removeClass("error");
            $div02.hide();
            $div01.show();
        }else{
            $(this).addClass("error");
            $div01.hide();
            $div02.show();
            $div02.find("span").html("请输入确认密码");
        }
    });
    $("#regist").click(function(){
        $("#phone,#yzm01,#yzm02,#uName,#pwd01,#pwd02").trigger("keyup");
        if($(".error").length==0) {
           /*$.ajax({
                data: {
                    username: $("#uName").val(),
                    password: $("#pwd01").val()
                },
                method: jsonP,
                url: "http://10.9.158.170:8080/API/user/add.aspx",
                success: function (e) {
                    //console.log(e)
                    if (e == "no") {
                        $("#regist").after('<span class="error">账户存在，请重新输入</span>');
                    } else if (e == "ok") {
                        $("#regist").after('<span class="error">注册成功，正在跳转</span>');
                        window.location.href = "index.html";
                    }
                }
            });*/
            $.ajax({
                type:"get",
                url:"http://10.9.158.170:8080/API/user/add.aspx",
                async:true,
                dataType:"jsonp",
                data:{username:$("#uName").val(),password:$("#pwd01").val()},
                success:function(data){
                    console.log(data);
                    if(data.result == "ok"){
                        alert("注册成功");
                        window.open("Login.html");

                    }else{
                        alert("注册失败");
                    }
                }
            });
        }
    });
});


