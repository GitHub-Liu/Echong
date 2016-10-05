/**
 * Created by lhb on 2016/9/21.
 */
$("#headerBack").load("../public/header.html");
$("#searchBack").load("../public/search.html");
$("#footerBack").load("../public/footer.html");
$("#bottomBack").load("../public/bottom.html");
$("#carShoppingBack").load("../public/car.html");
$("#containerLinkBack").load("../public/containerLink.html");
$(function(){
	$("img").lazyload({
                effect:"fadeIn",
                placeholder:"../images/grey.gif",
                event:"click"
   });
    $.each($(".nav-item"),function(i,o){
        var $lists = $(this).children("ul");
        $(this).hover(function(){
            $lists.show();
        },function(){
            $lists.hide();
        });
        $.each($lists.children("li"),function(i,o){
            var $html = $(this).html();
            $(this).click(function(){
                $(this).parent().parent().children(".sp").html($html);
                $(this).parent().hide()
            });
        }); //遍历完成内容替换
    });  //遍历完成nav显示隐藏
    $(".brand-letters").hide();
    var flag = true;
    $(".brand-flex").click(function(){
        if(flag){
            $(".brand-letters").show();
            $(this).addClass("active").children("i").html("收起");
            $(".brand-brands").addClass("active");
            flag = false;
        }else{
            $(".brand-letters").hide();
            $(this).removeClass("active").children("i").html("更多");
            $(".brand-brands").removeClass("active");
            flag = true;
        }
        $(".brand-letters>ul>li:not(:first)").mouseenter(function(){
            var $word = $(this).children("p").html();
            $(".brand-brands>div>div>div[id^="+$word+"]").parent().show().siblings().hide();
        });
        $(".brand-letters>ul>li:first").mouseenter(function(){
            $(".all").show();
        });
        $(".brand-letters>ul>li").mouseenter(function(){
            $(".brand-letters>ul>li").removeClass("active");
            $(this).addClass("active");
        });
    });
    $.get("../json/lists01.json",function(data){
        var html = "";
        $.each(data,function(i,o){
            var html01 = "";
            $.each(o.subject,function(j,k){
                var html02 = "";
                $.each(k.tab,function(m,n){
                    html02 +="<li>"
                            +"<a href=\"#\"  title=\""+n.tit01+"\"><img src=\""+n.url01+"\"/></a>"
                            +"</li>";
                });
                html01 += "<h2>"+k.title+"</h2>"
                        +"<a href=\"#\"><em></em><span>"+k.active+"</span></a>"
                        +"<div class=\"pic\">"
                        +"<a href=\"#\" title=\""+k.title+"\"><img src=\""+k.url+"\"/></a>"
                        +"</div>"
                        +"</div>"
                        +"<div class=\"lists-tab\">"
                        +"<button class=\"btnL\"></button>"
                        +"<div>"
                        +"<ul>" + html02 +"</ul>"
                        +"</div>"
                        +"<button class=\"btnR\"></button>"
                        +"</div>"
                        +"<a href=\"#\">"+k.pc+"</a>"
                        +"<p><del>"+k.del+"</del><span >"+k.price+"</span></p>";
            });
            html += "<div class=\"lists-item\">"
                    +"<div class=\"lists-con\">"
                    +"<div class=\"lists-show\">"
                    + html01
                    +"<p class=\"h21\"><em>"+o.count+"</em><em>"+o.user+"</em></p>"
                    +"</div>"
                    +"<div class=\"lists-link\">"
                    +"<a class=\"sc\" href=\"#\"><span>收藏</span></a>"
                    +"<a class=\"add\" href=\"#\"><span>加入购物车</span></a>"
                    +"</div>"
                    +"</div>";
            $("#listsItems").html(html);
        });
    }); //lists项ajax获取
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 600) {
            $(".menus-hanging").css({
                "position":"fixed",
                "top":"0",
            });
        } else {
            $(".menus-hanging").css({
                "position":"static"
            });
        }
    });
});
