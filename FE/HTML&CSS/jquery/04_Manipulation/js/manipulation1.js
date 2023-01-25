$(document).ready(function(){
    //ex1
    $(".btn1").click(function(){ //html1
        $(".box1").html("<p>변경</p>");
        $(".box1").css("border","1px solid red");
        $(".box1 p").css("border","1px solid blue");
    });
    $(".btn2").click(function(){ //html2
        //box1의 html > box2의 html로 변경
        $(".box1").html( $(".box2").html() );
    });
    $(".btn3").click(function(){ //html3
        var k = $(".box2").html();
        $(".box1").html(k);
    });


    //ex2
    $(".btn4").click(function(){ //remove
        $(".text_wrap").remove();
    });
    $(".btn5").click(function(){ //detach
        $(".text_wrap").detach();
    });
    $(".btn6").click(function(){ //empty
        $(".text_wrap").empty();
    });


    //ex3
    $(".ex3_t").mouseover(function(){
        // $(this).text("그런<br>가요.");
        $(this).html("그런<br>가요.");
    });


});