function banner(){

    $(".food:not(:animated)")
    .animate({marginLeft : parseInt($(".food").css("margin-left"))-250+"px"},"linear",function(){
        $(".food li:first").appendTo(".food"); //맨 앞 li를 맨 뒤로 이동
        $(".food").css("margin-left","-250px");
    });
}




$(document).ready(function(){
    //#notice li 개수
    //langth로도 가능
    var li_w = $(".food li").width();
    var w = li_w * $(".food li").length+"px"; //.seiz selector의 개수
    // var w = 320 * $("#notice li").length+"px"; //js length로도 사용가능
    $(".food").css("width", w);
    // console.log(w); //320 * 6 = 1920
    $(".food li:last").prependTo(".food");// 마지막 li를 맨 앞으로 이동
    $(".food").css("margin-left",-li_w+"px");

    $(".prev").click(function(){// <
        $(".food:not(:animated)")
        .animate({marginLeft : parseInt($(".food").css("margin-left"))-li_w+"px"},"slow","swing",function(){
            $(".food li:first").appendTo(".food"); //맨 앞 li를 맨 뒤로 이동
            $(".food").css("margin-left",-li_w+"px");
        });
    });
    $(".next").click(function(){// >
        $(".food:not(:animated)")
        .animate({marginLeft : parseInt($(".food").css("margin-left"))+li_w+"px"},"slow","swing",function(){
            $(".food li:last").prependTo(".food"); //맨 앞 li를 맨 뒤로 이동
            $(".food").css("margin-left",-li_w+"px");
        });
    });
    var banner = setInterval("banner()",1000);


    $(".food li").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
        // alert("멈췄나요"); 확인해보려고 올린거임
    }).mouseout(function(){
        banner = setInterval("banner()",1000);
        $(this).find("img").css("opacity","1.0");
    });
    
    $(".next").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
        // alert("멈췄나요"); 확인
    }).mouseout(function(){
        banner = setInterval("banner()",3000);
        $(this).find("img").css("opacity","1.0");
    });
    $(".prev").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
        // alert("멈췄나요"); 확인
    }).mouseout(function(){
        banner = setInterval("banner()",3000);
        $(this).find("img").css("opacity","1.0");
    });
});