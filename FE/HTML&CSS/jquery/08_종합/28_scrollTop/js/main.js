$(document).ready(function(){
    //notice
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    $("#notice a").click(function(){
        $("#notice").slideUp(1000);
    });


    //menu_btn
    var show1 = false;
    $(".menu_btn").click(function(){
        show1 = !show1;
        if(show1){
            $("#menu_r").animate({"right" : "0"},500);
            $(".menu_btn").animate({"right" : "200px"},500).attr("src","images/menu_close.png");
            $(".top_btn, .bottom_btn").animate({"right":"210px"},500)
        }
        else{
            $("#menu_r").animate({"right" : "-200px"},500);
            $(".menu_btn").animate({"right" : "0"},500).attr("src","images/menu.png");;
            $(".top_btn, .bottom_btn").animate({"right":"100px"},500)
        }
    });

    //top, bottom 버튼
    $(".top_btn").click(function(){
        $("html,body").stop().animate({scrollTop : "0"},500);
    });
    $(".bottom_btn").click(function(){
        $("html,body").stop().animate({scrollTop : "1000px"},500);
    });

    //윈도우
    $(window).resize(function(){
        var w = parseInt($(this).width());
        if(w > 1024){
            $("#menu_r, .menu_btn, .top_btn, .bottom_btn").show();
        }
        else{
            $("#menu_r, .menu_btn, .top_btn, .bottom_btn").hide();
        }
    }).resize();




});