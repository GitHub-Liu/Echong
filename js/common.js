/**
 * Created by Administrator on 2016/9/14.
 */
$(".header-user").hover(function(){
    $(".header-user>ul").addClass("active");
},function(){
    $(".header-user>ul").removeClass("active");
});
$(".header-collect").hover(function(){
    $(".header-collect>div").addClass("active");
},function(){
    $(".header-collect>div").removeClass("active");
});
$(".nav-titles>div").hover(function(){
    $(".nav-titles>div>div").show();
},function(){
    $(".nav-titles>div>div").hide();
});
