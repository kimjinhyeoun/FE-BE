$(document).ready(function(){
    //.evt1 - click 이벤트 등록
    $(".evt1").click(function(){
        alert("evt1 이벤트");
    });




    //.evt2, .evt3 - click 이벤트 등록
    function event1(){
        alert("hello world!");
    }
    $(".evt2").click(event1); //확인2
    $(".evt3").contextmenu(event1); //확인3


    //.evt4 - 이벤트 등록
    $(".evt4").bind("dblclick mouseout", function(){ //확인4 이벤트 2개 넣음 더블클릭 마우스아웃
        $(this).text("Hi!");
    });


    //.evt5 - 이벤트 등록
    $(".evt5").on("click mouseout", function(){
        alert("on test")
    });


    //.evt4 - 더블클릭 이벤트 삭제
    $(".evt4").unbind("dblclick");

    //.evt5 - 마우스아웃 이벤트 등록
    $(".evt5").off("mouseout");






});