/**
 * Created by lhb on 2016/9/19.
 */

$(function(){
    $("#headerBack").load("../public/header.html");
    $("#searchBack").load("../public/search.html");
    $("#containerLinkBack").load("../public/containerLink.html");
    $("#footerBack").load("../public/footer.html");
    $("#bottomBack").load("../public/bottom.html");
    $("#carShoppingBack").load("../public/car.html");
    $(".nav-menus").show();
    $(".nav-title02").mouseenter(function(){
        $(".nav-change").hide();
        $(".nav-menus").show();
    });
    $(".nav-title01").hover(function(){
        $(".nav-menus").hide();
        $(".nav-change").show();
    },function(){
        $(".nav-menus").show();
    });


    $("#surpriseTit>ul>li").mouseenter(function(){
        $("#surpriseTit>ul>li").removeClass("active");
        $(this).addClass("active");
    });
    $.get("../json/index01.json",function(data){
        var html = "";
        var html01 = "";

        $.each(data,function(i,o){

            html +="<div style=\"background:"+o.bg+";\">"
                  +"<div>"
                  +"<a href=\"#\"><img src=\""+o.url+"\" alt=\"茂菁坐车训练\"></a>"
                  +"</div>"
                  +"</div>";
            html01+="<a href=\"#\">"+o.count+"</a>";
            $("#lunBoPics01").html(html);
            $("#lunBoCot01").html(html01);
        });

        var setDot = function(currIndex){
                $("#lunBoCot01>a")
                .removeClass("on")
                .eq(currIndex)
                .addClass("on");
        };
        $("#lunBoPics01>div:eq(0)").show();
        var currIndex = 0;
       /* $(".next").click(function(){
            currIndex++;
            if(currIndex == 3){
                currIndex = 0;
            }
            $("ul>li").eq(currIndex - 1).hide();
            $("ul>li").eq(currIndex).fadeIn(400);

            setDot(currIndex);

            // if(currIndex == 3){
            // 	currIndex = 0;
            // }
            // $("ul>li").hide().eq(currIndex).fadeIn(400);
        });

        $(".prev").click(function(){
            currIndex--;
            $("ul>li").eq(currIndex + 1).hide();
            if(currIndex == -1){
                currIndex = 2;
            }
            $("ul>li").eq(currIndex).fadeIn(400);

            setDot(currIndex);

            // if(currIndex == -1){
            // 	currIndex = 2;
            // }
            // $("ul>li").hide().eq(currIndex).fadeIn(400);
        });
        */
        setInterval(function() {
            currIndex++;
            //currentIndex=currentIndex%4;
            currIndex %= $("#lunBoCot01>a").length;
            $("#lunBoPics01>div").eq(currIndex - 1).hide();
            $("#lunBoPics01>div").eq(currIndex).fadeIn(400);
            setDot(currIndex);
        }, 3000);
        $("#lunBoCot01>a").mouseenter(function(){
            var $index = $(this).index();
            $("#lunBoPics01>div").hide().eq($index).fadeIn(400);
            setDot($index);
        });
    });
    $.get("../json/index02.json",function(data){
        var html = "";
        $.each(data,function(i,o){
            html+=" <li>"
                +"<div class=\"list-pic\">"
                +"<a href=\"#\"><img src=\""+o.url+"\"></a>"
                +"<h2><a href=\"#\">"+o.tit+"</a></h2>"
                +"</div>"
                +"<div class=\"list-price\">"
                +"<div>"
                +"<div><em>￥</em><span>"+o.price+"</span></div>"
                +"<p><del>"+o.del+"</del><span> "+o.span+"</span></p>"
                +"</div>"
                +"<p>"
                +"<a class=\"addData\" href=\"javascript:;\" pid=\""+o.id+"\">点击抢购</a>"
                +"</p>"
                +"</div>"
                +"</li>";
            $(".surprise-list>ul").html(html);
        });
    });
    $.get("../json/index03.json",function(data){
        var html = "";
        $.each(data,function(i,o){
            html +="<li>"
                +"<a href=\"#\"><img src=\""+o.url+"\"></a>"
                +"<p><a href=\"#\">"+o.user+"</a></p>"
                +"<p>"+o.Nob+"</p>"
                +"</li>";
            $(".act-dwon>ul").html(html);
        });
    });
    $.get("../json/index04.json",function(data){
        var html = "";
        $.each(data,function(i,o){
            var html01 = "";
            var html02 = "";
            $.each(o.item01,function(j,k){
                html01 +="<a href=\"#\"><img src=\""+k.spimg+"\">"+k.spa+"</a>";
            });
            $.each(o.item02,function(m,n){
                html02 +="<li>"
                    +"<a href=\"#\" title=\""+n.utit+"\">"
                    +"<img src=\""+n.uimg+"\">"
                    +"</a>"
                    +"<h3>"+n.utit+"</h3>"
                    +"<p>"+n.uprice+"</p>"
                    +"</li>";
            });
            html +="<div id=\"foodsFs\">"
                +"<h2>"
                +"<img src=\""+o.himg+"\">"
                +"<em>"+o.hem+"</em>"
                +"<span>"
                + html01
                +"</span>"
                +"</h2>"
                +"<div>"
                +"<div class=\"foodsFsL\">"
                +"<a href=\"#\"><img src=\""+o.dimg+"\"></a>"
                +"</div>"
                +"<ul class=\"foodsFsR\">"
                + html02
                +"</ul>"
                +"</div>"
                +"</div>";
            $("#foodsFsBack").html(html);

        });
    });
    $.get("../json/index05.json",function(data){
        var html = "";
        $.each(data,function(i,o){
            html +="<li>"
                +"<div class=\"tj-lelf\">"
            +"<a href=\"#\" title=\""+o.tit+"\"><img src=\""+o.url+"\"/></a>"
            +"</div>"
            +"<div class=\"tj-right\">"
            +"<h3><a href=\"#\">"+o.tit+"</a></h3>"
            +"<div class=\"tj-price\">"
            +"<b></b>"
            +"<em>"+o.em+"</em>"
            +"<span>推荐理由：</span>"
            +"</div>"
            +"<p>"+o.p+"</p>"
            +"</div>"
            +"</li>";
        });
        $("#boutique>ul").html(html);
    });
});