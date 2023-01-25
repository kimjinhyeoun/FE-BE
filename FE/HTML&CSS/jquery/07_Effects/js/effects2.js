$(document).ready(function(){
    // ex1
    $(".photo").hide();
    $(".btn1").click(function(){ //fadeIn
        $(".photo").fadeIn(1000);
    });
    $(".btn2").click(function(){ //fadeOut
        $(".photo").fadeOut(1000);
    });
    $(".btn3").click(function(){ //fadeTo
        $(".photo").fadeTo("slow", 0.4);
    });
    $(".btn4").click(function(){ //fadeToggle
        // $(".photo").fadeToggle(1000);
        $(".photo:not(:animated)").fadeToggle(1000);
    });
    $(".btn5").click(function(){ //callback
        $(".photo").fadeIn(1000, function(){
            $(this).fadeOut(1500); //.photo대신에 this 사용가능하다.
        });
    });

    //ex2
    $(".ex2_i").mouseover(function(){
        $(".out1", this).fadeOut();
    });
    $(".over1").mouseout(function(){
        $(".out1").fadeIn();
    });

    //ex3
    $(".ex3_i")
    .animate({left : "60%"},1000)
    .animate({ top : "40%"},500)
    .animate({ left : "0%"},1000)
    .animate({ top : "0%"},1000);




    //ex4
    $(".ex4_i")
        .delay(1000)
        .animate({left : "400px", opacity : "0.5"}, 2000)
        // .animate({left : "500px", opacity : "1"}, 1000);
        .animate({ left : "+=100px", opacity : "1"}, 1000)
        .animate({ top : "+=150px"}, 500)
        .animate({ top : "-=50px"}, "fast")
        .animate({ left : "0px"}, "fast")
        .animate({ top : "0px"}, "fast")
        .animate({ top : "40px"}, "fast");
});