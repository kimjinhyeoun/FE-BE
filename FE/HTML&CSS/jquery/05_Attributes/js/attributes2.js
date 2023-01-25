$(document).ready(function(){
    //ex1
    $("#main_navi ul li a").mouseover(function(){
        var over1 = $(this).attr("data-atitle");
        $(this).text(over1);
    }).mouseout(function(){
        var out1 = $(this).attr("data-btitle");
        $(this).text(out1);
    });


    //ex2
    //icon_all 첫번째 이미지 src변경
    $("#icon_all li:first a img").attr("src","images/btn_on.png");
    $("#icon_all li a img").bind("click",function(){
        $("#icon_all li a img").attr("src","images/btn_off.png");
        $(this).attr("src","images/btn_on.png");
    });
    $(".btn1").bind("click",function(){
        $(".banner img").attr("src","images/main1.jpg");
        return false; //링크가 # 일시 위로 안튕겨올라감
    });
    $(".btn2").bind("click",function(){
        $(".banner img").attr("src","images/main2.jpg");
        return false;
    });
    $(".btn3").bind("click",function(){
        $(".banner img").attr("src","images/main3.jpg");
        return false;
    });


});