/**
 * Created by lhb on 2016/9/20.
 */
$("#headerBack").load("../public/header.html");
$("#searchBack").load("../public/search.html");
$("#footerBack").load("../public/footer.html");
$("#bottomBack").load("../public/bottom.html");
$("#carShoppingBack").load("../public/car.html");
$(function(){
    $.get("../json/detail01.json",function(data){
        var html = "";
        $.each(data, function(i,o){
            var html01 = "";
            $.each(o.lists, function(j,k){
                 html01 += "<li><a href=\"#\">"+k.item01+"<em>"+k.count01+"</em></a></li>";
            });
            html += "<div class=\"nav-item\">"
                +"<span class=\"sp\">"+o.item+"<em>"+o.count+"</em></span>"
                +"<b><img src=\""+o.url+"\" /></b>"
                +"<ul>" + html01 +"</ul>"
                +"</div>"
                +"<span class=\"fs\">&gt;</span>";
            $("#containerNav>div").html(html);
        });
        $.each($(".nav-item"),function(i,o){
            var $lists = $(this).children("ul");
            $(this).hover(function(){
                $lists.show();
            },function(){
                $lists.hide();
            });
            /*
            $lists.click(function(e){
                if($(e.target).is("li")){
                    var $html = $(e.target).html();
                    $(this).parent().children(".sp").html($html);
                    $(this).hide()
                }
            });*/ //事件委托完成内容替换，但不完美
            $.each($lists.children("li"),function(i,o){
                var $html = $(this).html();
                $(this).click(function(){
                    $(this).parent().parent().children(".sp").html($html);
                    $(this).parent().hide()
                });
            }); //遍历完成内容替换
        });  //遍历完成显示隐藏
    });  //ajax获取数据

});
$.get("../json/detail02.json",function(data){
    var html = "";
    $.each(data,function(i,o){
        var html01 = "";
        var html02 = "";
        var html03 = "";
        $.each(o.item01,function(j,k){
            html01 +="<img src=\""+k.img+"\"/>";
        });
        $.each(o.item03,function(m,n){
            html02 +="<li><img src=\""+n.simg+"\"/> </li>";
        });
        $.each(o.item02,function(x,y){
            html03 +="<img src=\""+y.bimg+"\"/>";
        });
        html += "<div class=\"detail-sbox\">"
            +"<div>"
            + html01
            +"<div class=\"tool\"></div>"
            +"</div>"
            +"</div>"
            +"<div class=\"detail-ssbox\">"
            +"<button class=\"btn1\">&lt;</button>"
            +"<div class=\"ssbox-items\">"
            +"<ul class=\"ssbox-imgs\">"
            + html02
            +"</ul>"
            +"</div>"
            +"<button class=\"btn2\">&gt;</button>"
            +"</div>"
            +"<div class=\"detail-box\">"
            + html03
            +"</div>";
        $(".detail-show").html(html);
    });
    
});
$(window).scroll(function(){
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 800) {
        $(".rightNavfiex").css({
        	"position":"fixed",
        	"top":"0",
        	"background":"#f4f4ee"
        });
    } else {
        $(".rightNavfiex").css({
        	"position":"static"
        });
    }
});