function banner(){

    $("#notice:not(:animated)")
    .animate({marginLeft : parseInt($("#notice").css("margin-left"))-320+"px"},"fast","swing",function(){
        $("#notice li:first").appendTo("#notice"); //맨 앞 li를 맨 뒤로 이동
        $("#notice").css("margin-left","320px");
    });
}



$(document).ready(function(){
    //#notice li 개수
    //langth로도 가능
    var w = 320 * $("#notice li").size()+"px"; //.seiz selector의 개수
    // var w = 320 * $("#notice li").length+"px"; //js length로도 사용가능
    $("#notice").css("width", w);
    // console.log(w); //320 * 6 = 1920
    $("#notice li:last").prependTo("#notice");// 마지막 li를 맨 앞으로 이동
    $("#notice").css("margin-left","-320px");

        var banner = setInterval("banner()",5000);
    
    $(".prev_btn").click(function(){// <
        $("#notice:not(:animated)")
        .animate({marginLeft : parseInt($("#notice").css("margin-left"))-320+"px"},"slow","swing",function(){
            $("#notice li:first").stop().appendTo("#notice"); //맨 앞 li를 맨 뒤로 이동
            $("#notice").css("margin-left","-320px");
            
        });
    });
    $(".next_btn").click(function(){// >
        $("#notice:not(:animated)")
        .animate({marginLeft : parseInt($("#notice").css("margin-left"))+320+"px"},"slow","swing",function(){
            $("#notice li:last").prependTo("#notice"); //맨 앞 li를 맨 뒤로 이동
            $("#notice").css("margin-left","-320px");
        });
    });

    $("#notice li").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
        // alert("멈췄나요"); 확인해보려고 올린거임
    }).mouseout(function(){
        banner = setInterval("banner()",5000);
        $(this).find("img").css("opacity","1.0");
    });






});