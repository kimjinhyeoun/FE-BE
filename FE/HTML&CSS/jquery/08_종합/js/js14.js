$(document).ready(function(){

    //태그추가
    $("#main_navi").before("<div class='bg'></div>")

    //
    $(".bg, .sub").hide();
    $("#menu").mouseenter(function(){
        $(".bg, .sub").stop().slideDown("fast");
    }).mouseleave(function(){
        $(".bg, .sub").stop().slideUp("fast");
    });

    $(".bg").mouseover(function(){
        $(this).stop().show();
        $(".sub").stop().show();
    }).mouseout(function(){
        $(this).stop().slideUp("fast");
        $(".sub").stop().slideUp("fast");
    });

    //메뉴 이미지변경
    $("#menu > li").hover(function(){
        var bgImg = $(this).attr("data-n");
        $(".bg").css("background-image","url(images/hybg"+bgImg+".jpg)");
    })


    //languahe 내용 보이기/ 숨기기
    $(".lang_li > ul").hide();
    var show = false;
    $(".lang_li").click(function(){
            show = !show;
            if(show == true){ //  if(show) 이렇게 넣어도 됨
                // $(".lang_li > ul").show(); //이렇게도 가능
                $(".lang_li").children("ul").show(); 
                $(".lang_li > a").css("color","red");
                $(".lang_li > span").text("▲").css("color","red");
            }
            else{
                $(".lang_li").children("ul").hide();
                $(".lang_li > a").css("color","");
                $(".lang_li > span").text("▼").css("color","");
            }
    })




});