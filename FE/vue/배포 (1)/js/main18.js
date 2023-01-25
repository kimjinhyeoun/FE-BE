$(document).ready(function(){

    //menu_wrap 전체메뉴 show/hide
    $(".all_menu img").click(function(){
        $(".menu_wrap").animate({left : "0"},"fast");
    });
    $(".close_btn").click(function(){
        $(".menu_wrap").animate({left : "-50%"},"fast");
    });


});