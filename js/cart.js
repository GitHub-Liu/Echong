/**
 * Created by lhb on 2016/9/22.
 */
$(function(){
    $("#headerBack").load("../public/header.html");
    $("#searchBack").load("../public/search.html");
    $("#footerBack").load("../public/footer.html");
    $("#bottomBack").load("../public/bottom.html");
    $("#carShoppingBack").load("../public/car.html");
    $("#cartMenu>ul>li").hover(function(){
            $(this).addClass("active");
    },function(){
            $(this).removeClass("active");
    });
    //读取cookie中的数据并解析成HTML渲染到页面上
    var getShopCart = function(){
        var $shopcart = $.cookie("shopcart");
        if($shopcart != undefined) {
            var json = strOper.get($shopcart);

            $.each(data, function (i, o) {
                html += "<li>"
                    + "<div class=\"cart-sel\">"
                    + "<input checked=\"checked\" type=\"checkbox\"/>"
                    + "</div>"
                    + "<div class=\"cart-goods\">"
                    + "<div class=\"goods-pic\">"
                    + "<a href=\"#\">"
                    + "<img src=\"../images/cart02.jpg\">"
                    + "</a>"
                    + "</div>"
                    + "<div class=\"goods-act\">"
                    + "<a href=\"#\"><em>(折扣)</em>美国8in1 顶歌 夹肉洁齿骨 小号1支装 35g  小号 </a>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"cart-count\">"
                    + "<div>"
                    + "<p>-</p>"
                    + "<input value=\"1\" type=\"text\">"
                    + "<p>+</p>"
                    + "</div>"
                    + "<p>有货</p>"
                    + "</div>"
                    + "<div class=\"cart-price\">"
                    + "￥19.60"
                    + "</div>"
                    + "<div class=\"cart-cz\">"
                    + "<a href=\"#\">[收藏]</a>"
                    + "<a href=\"#\">[删除]</a>"
                    + "</div>"
                    + "</li>";
            });
        }
    }
});