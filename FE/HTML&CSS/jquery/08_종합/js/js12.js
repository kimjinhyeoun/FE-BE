$(document).ready(function(){

    //
    $(".submenu").hide();
    $("#menu > li").hover(function(){
        $(this).children("ul").stop().fadeIn();
    },function(){
        $(this).children("ul").stop().fadeOut();
    });
});