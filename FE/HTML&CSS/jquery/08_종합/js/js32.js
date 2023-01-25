$(document).ready(function(){
    
    $("#number_bgimg").before("<p class='txt'>0</p>"); //임시코드
    $(".txt").css({"position":"fixed","left":"40%","top":"10%","color":"red"}); //임시코드
    


    $(".num_img").css("opacity","0");

    $(window).scroll(function(){
        $(".txt").text(parseInt($(this).scrollTop())); //임시코드

        if($(this).scrollTop() > 1200){
            $(".no1").animate({"opacity":"1"});
            $(".no01").animate({marginLeft : "0"},1000);
            $("#number_wrap > li:nth-child(1) > h3").animate({marginLeft : "0"},2000);
            $("#number_wrap > li:nth-child(1) > p").delay(1000).animate({marginLeft : "0"},1000);
        }
        if($(this).scrollTop() > 1500){
            $(".no2").animate({"opacity":"1"});
            $(".no02").animate({marginLeft : "0"},1000);
            $("#number_wrap > li:nth-child(2) > h3").animate({marginLeft : "0"},2000);
            $("#number_wrap > li:nth-child(2) > p").delay(1000).animate({marginLeft : "0"},1000);
        }
        if($(this).scrollTop() > 1800){
            $(".no3").animate({"opacity":"1"});
            $(".no03").animate({marginLeft : "0"},1000);
            $("#number_wrap > li:nth-child(3) > h3").animate({marginLeft : "0"},2000);
            $("#number_wrap > li:nth-child(3) > p").delay(1000).animate({marginLeft : "0"},1000);
        }
        if($(this).scrollTop() > 2100){
            $(".no4").animate({"opacity":"1"});
            $(".no04").animate({marginLeft : "0"},1000);
            $("#number_wrap > li:nth-child(4) > h3").animate({marginLeft : "0"},2000);
            $("#number_wrap > li:nth-child(4) > p").delay(1000).animate({marginLeft : "0"},1000);
        }
    });
    
    




    
});