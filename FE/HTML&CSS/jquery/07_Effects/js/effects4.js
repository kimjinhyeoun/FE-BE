$(document).ready(function(){
    //ex1
    $(".ex1_i").hover(function(){ //a태그
        $(".img1", this)
        .eq(1)
        .stop()
        .animate({"opacity": "0"},500);
    }, function(){
        $(".img1", this)
        .eq(1)
        .stop()
        .animate({"opacity": "1"},500);
    });

    //ex2
    var ex2 = setInterval(function(){
        $(".ex2_i img").animate({ "top" : "-20px" },1000);
        $(".ex2_i img").animate({ "top" : "0px" },1000);
    },2000);



    //ex3
    var ex3 = setInterval(function(){
        $(".ex3_i img").delay(300).animate({ "top" : "50px" },1000, "easeOutBounce");
        $(".ex3_i img").delay(300).animate({ "top" : "0px" },1000, "easeOutBounce" );
    },2000);

    
    //ex4
    banner6();
    function banner6(){
        $("#ba0").delay(2500).animate({left : "-500px"},1500); //1번이미지
        $("#ba1").delay(2500).css({"display":"block", "left":"500px"}) //2번이미지
                 .animate({left : "0"},1500, function(){
                    $(this).delay(2500).animate({left: "-500px"},1500); //2번이미지
        $("#ba2").delay(2500).css({"display":"block", "left":"500px"}) //3번이미지
                 .animate({left : "0"},1500, function(){
                 $(this).delay(2500).animate({left: "-500px"},1500); //3번이미지
        $("#ba0").delay(2500).css({left : "500px"},1500)  //다시 1번이미지
                 .animate({left : "0"},1500, banner6); //banner6 은 콜백을 의미함 계속 반복하는것
                });   //마지막에 오버플로우 css에 줘서 유종의 미를 거둠
            });
    }

});