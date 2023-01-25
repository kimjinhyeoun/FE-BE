$(document).ready(function(){
    $(".btn1").click(function(){ //append
        //p.result1안에서 맨뒤에 이미지 추가
        $("p.result1").append("<img src='images/btn_next.jpg'>");
    });
    $(".btn2").click(function(){ //prepend
        //p.result1안에서 맨 앞에 이미지 추가
        $("p.result1").prepend("<img src='images/btn_prev.jpg'>");
    });
    $(".btn3").click(function(){ //appendTo
        //p.result2안에서 .photo를 맨 뒤로 이동
        $("p.result2 .photo").appendTo("p.result2");
    });
    $(".btn4").click(function(){ //prependTo
        //p.result2안에서 .photo를 맨 앞으로로 이동
        $("p.result2 .photo").prependTo("p.result2");
    });
    $(".btn5").click(function(){ //append
        //#ex2 ol안에 li를 맨 뒤에 '확인'을 추가한다
        $("#ex2 ol").append("<li>확인</li>");
    });
    $(".btn6").click(function(){ //prepend
        //#ex2 ol안에 li를 맨 앞에 '확인'을 추가한다
        $("#ex2 ol").prepend("<li>확인</li>");
    });
    $(".btn7").click(function(){ //실행1
        $(".box3 img:first").clone().appendTo( $(".box3") );
    });
    $(".btn8").click(function(){ //실행2
        $(".box3 img:first").clone(true).appendTo( $(".box3") );
    });
    $(".box3 img").bind("click",function(){
        alert("clone 테스트");
    });
});