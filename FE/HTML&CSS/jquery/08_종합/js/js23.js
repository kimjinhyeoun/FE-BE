$(document).ready(function(){

   var n = 1;

   function slide(){
    $(".btn_wrap button").removeClass("active");
    $(".btn"+n).addClass("active");
    $(".photo li").css({left : 0}).stop().animate({left : "-1024px"},500,function(){
        $(this).css("z-index","1")
    });
    $(".photo li.no"+n).css({left : "1024"}).stop().animate({left : "0"},500,function(){
        $(this).css("z-index","2")
    });
   }
   $(".btn").click(function(){
    n = $(this).attr("data-n");
    slide();
   });
   $(".next").click(function(){
    n++;
    if(n == 6){
        n = 1;
    }
    slide();
   });

   $(".prev").click(function(){
    n--;
    if(n == 0){
        n = 5;
    }
    slide();
   });


});