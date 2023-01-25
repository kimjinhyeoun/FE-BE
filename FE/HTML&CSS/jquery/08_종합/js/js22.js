$(document).ready(function(){
    
    var w = 320*$("#notice li").size()+"px"
    $("#notice").css("width",w);
    // alert(w); // 320*5 = 1600

    $("#notice li:last").prependTo("#notice");
    $("#notice").css("margin-left","-320px");


    //1번 이미지 title
    $(".photo_bg1 li:not(:first)").fadeOut();

    //1번 이미지 설명입니다.
    $(".photo_bg2 li:not(:first)").hide();


    $(".prev_btn").click(function(){
        $("#notice:not(:animated)")
        .animate({marginLeft : parseInt($("#notice").css("margin-left"))-320+"px"},"slow","swing",function(){
            $("#notice li:first").appendTo("#notice"); //맨 앞 li를 맨 뒤로 이동
            $("#notice").css("margin-left",-320+"px");

            //텍스트랑 연결
            var n = $("#notice li").attr("data-n");
            n++;
            console.log(n);
            if(n==6){
                n = 1;
            }
            $(".photo_bg1 li").fadeOut(500);
            $(".photo_bg1 .se"+n).fadeIn(500);
            $(".photo_bg2 li").hide(500);
            $(".photo_bg2 .se2"+n).show(500);
        });
    });
    $(".next_btn").click(function(){
        $("#notice:not(:animated)")
        .animate({marginLeft : parseInt($("#notice").css("margin-left"))+320+"px"},"slow","swing",function(){
            $("#notice li:last").prependTo("#notice"); //맨 뒤 li를 맨 앞으로 이동
            $("#notice").css("margin-left",-320+"px");

            var n = $("#notice li").attr("data-n");
            n++;
            console.log(n);
            if(n==6){
                n = 1;
            }
            $(".photo_bg1 li").fadeOut(500);
            $(".photo_bg1 .se"+n).fadeIn(500);
            $(".photo_bg2 li").hide(500);
            $(".photo_bg2 .se2"+n).show(500);
        });
    });

});