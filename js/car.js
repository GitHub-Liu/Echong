/**
 * Created by lhb on 2016/9/21.
 */
$(function(){
    //对产品数量加减的函数
    var counter = function(element,type){
        var count = type === true ? 1 : -1;
        var $p = type === true ? $(element).prev() : $(element).next();
        if($p.html() == "1" && type === false){
            count = 0;
        }
        else{
            var $shopcart = $.cookie("shopcart");
            var id = $(element).data("pid");
            var result = strOper.counter($shopcart,id,type);
            $.cookie("shopcart",result);
        }
        $p.html(parseInt($p.html()) + count);
    };

    //加入购物车事件委托
    $(".surprise-list>ul").click(function(e){
        if($(e.target).is(".addData")){
            //ID#产品名#图片#价格#数量
            var $target = $(e.target);
            var id =$target.attr("pid");
            var tit = $target.parent().parent().prev().children("h2").children("a").html();
            var img = $target.parent().parent().prev().children("a").children().attr("src");
            var price = $target.parent().prev().children("div").children("span").html();
            var str = id + "#" + tit + "#" + img  + "#" + "1"+ "#" + price;
            var $shopcart = $.cookie("shopcart");
            if(!$shopcart){
                //cookie文件中是空的
                $.cookie("shopcart",str,{
                    expires:7
                });
            }
            else{
                var result = strOper.add($shopcart,str);
                $.cookie("shopcart",result);
            }
        }
    });
});
