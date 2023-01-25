$(document).ready(function(){
    //우측상단 아이콘 변경
    $("#top > ul > li").hover(function(){
        var i_src = $(this).children(".s_img").attr("data-src");
        $(this).children(".s_img").attr("src",i_src);
    }, function(){
        var out = $(this).children(".s_img").attr("data-out");
        $(this).children(".s_img").attr("src","images/btn_"+out+"_off.png")
    });



    //통합검색
    $("#top > ul > li.search div").slideUp(0);
    $("#top > ul > li.search").bind("mouseenter",function(){
        $("#top > ul > li.search div").stop().slideDown("fast","easeOutBounce");
    });
    $("#top > ul > li.search").bind("mouseleave", function(){
        if($("#search").is(":focus")== true){ //있으면 true, 없으면 false
            $("#top > ul > li.search div").show();
        }else{
            $("#top > ul > li.search div").stop().slideUp(400,"easeOutBounce");
        }
    }).focusout(function(){ //포커스가 없으면
        $("#top > ul > li.search div").stop().slideUp(400,"easeOutBounce");
        $("#search").val(""); //value = val
    });




    //language
    $("#top > ul > li.language > ul").hide();
    $("#top > ul > li.language").mouseover(function(){
        $(this).children("ul").stop().fadeIn();
    }).mouseout(function(){
        $(this).children("ul").stop().fadeOut();
    });



    //wrap11
    //$(selector).is() selector의 대상을 비교하여 맞으면 true 아니면 false 를 반환
    $("#wrap11 span").click(function(){
        //클릭한 span에 클래스가 txt11이면 배경색, 아니면 border색
        if($(this).is("[class='txt11']")){
            $(this).css("background-color","pink");
        }
        else{
            $(this).css("border-color","blue");
        }
    });



});