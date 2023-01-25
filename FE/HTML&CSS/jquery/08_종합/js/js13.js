$(document).ready(function(){

    //태그추가
    $("#top").before("<p class='n_bg'></p>");


    //추가태그 숨기기
    $(".n_bg").hide();


    // 하위목록 메뉴 보이기/숨기기
    $(".submenu").hide();
    $("#menu > li").hover(function(){
        $(this).children("ul").show();
        $(".n_bg").show();
    },function(){
        $(this).children("ul").hide();
        $(".n_bg").hide();
    });

    //lang_wrap
    $(".ei, .ci").hide();
    $("#lang_i").mouseover(function(){
        $(".ei, .ci").show();
    }).mouseout(function(){
        $(".ei, .ci").hide();
        $("#lang_i p:first").addClass("sel");
    });

    $("#lang_i p:first").addClass("sel");
    $("#lang_i p").mouseover(function(){
        $("#lang_i p").removeClass("sel");
        $(this).addClass("sel");
    });


});