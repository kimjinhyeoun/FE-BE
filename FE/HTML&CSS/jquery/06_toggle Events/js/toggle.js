$(document).ready(function(){
    //ex1
    $(".num_btn").toggle(function(){
        $(".num_i").attr("src","images/number5.png");
    },function(){
        $(".num_i").attr("src","images/number4.png");
    },function(){
        $(".num_i").attr("src","images/number3.png");
    },function(){
        $(".num_i").attr("src","images/number2.png");
    },function(){
        $(".num_i").attr("src","images/number1.png");
    });


    //ex2
    $(".box").click(function(){
        $(this).css("border-color","#cc0066");
    });
    $(".evt").click(function(event){
        $(this).css("border-style","dashed");
        event.stopPropagation(); //이 요소는 evt 클릭시 box도 같이 눌렸는데 그걸 방지하고자 쓴 요소임그리고  return false 써도 됨
    })


    // ex3, ex4
    $("#ex3").mouseover(function(){
        $("#ex3 p").css("background-color","green");
    }).mouseout(function(){
        $("#ex3 p").css("border","3px solid #ff0000");
    });
    $("#ex4").mouseenter(function(){
        $("#ex4 p").css("background-color","green");
    }).mouseleave(function(){
        $("#ex4 p").css("border","3px solid #ff0000");
    });



});