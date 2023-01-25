$(document).ready(function(){

    //태그추가
    $("#main_menu").before("<p class='bg'></p>");

    //하위 ul, 추가태그 보이기/ 숨기기
    $(".bg, .sub").hide();
    $("#main_menu > ul").mouseenter(function(){
        $(".bg, .sub").stop().slideDown("fast")
    }).mouseleave(function(){
        $(".bg, .sub").stop().slideUp("")
    });

    //.bg
    $(".bg").mouseover(function(){
        $(this).stop().show();
        $(".sub").stop().show();
    }).mouseout(function(){
        $(this).stop().slideUp();
        $(".sub").stop().slideUp();
    });

    // $(".sub") 배경
    $(".sub").mouseover(function(){
        $(this).css("background-color","rgba(0,0,0,0.5)")
    }).mouseout(function(){
        $(this).css("background-color","")
    });
});