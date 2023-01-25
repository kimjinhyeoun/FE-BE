$(document).ready(function(){

    //ex1 모든 a의 href변경
    $("#ex1 a").attr("href","http://m.daum.net");


    //ex1 첫번째 a의 target 추가
    $("#ex1 a").eq(0).attr("target","_blank");

    //ex1 두번째 a의 target삭제
    $("#ex1 a").last().removeAttr("target");


    //ex2
    //이미지에 마우스 오버할때 이미지 변경(roll2_1.gif)과 title(이미지 설명)
    //mouseover,mouseout
    $("#ex2 img").mouseover(function(){
        $(this)
        .css("cursor","pointer")
        .attr({"src":"images/roll2_1.gif","title":"이미지 설명"});
    }).mouseout(function(){
        $(this)
        .css("cursor","default")
        .attr("src","images/bg7.jpg")
        .removeAttr("title");
    });

    //box3
    function scroll_n(i){
        $("#box3_i").scrollLeft( $("#box3_i").scrollLeft()+i );
    }
    $(".btn1").click(function(){ //왼쪽으로 스크롤
        scroll_n(-100)
    });
    $(".btn2").click(function(){ //오른쪽으로 스크롤
        scroll_n(100)
    });
    $(".btn3").click(function(){ //아래쪽으로 스크롤
        $("#box4_i").scrollTop( $("#box4_i") .scrollTop()+ 50);
    });
    $(".btn4").click(function(){ //위쪽으로 스크롤
        $("#box4_i").scrollTop( $("#box4_i") .scrollTop()+(-50));
    });



});