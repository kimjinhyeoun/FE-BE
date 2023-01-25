$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#main_navi_wrap").addClass("fixed1");
        }
        else{
            $("#main_navi_wrap").removeClass("fixed1");
        }
    });

    //top버튼
    $(".top_btn").click(function(){
        $("html,body").stop().animate({scrollTop : 0},2000, "easeInBounce");
    });
});