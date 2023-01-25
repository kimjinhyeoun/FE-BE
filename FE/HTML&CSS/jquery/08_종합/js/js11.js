$(document).ready(function(){
    //wrap1
    $("#container1").sliphover({
        backgroundColor : "#9999ff"   //배경색
    });
    $("#container2").sliphover({
        fontColor : "yellow" //글자색상
    });
    $("#container3").sliphover({
        backgroundColor : "rgba(22,30,300,.5)" //배경색
    });
    $("#container4").sliphover({
        textAlign : "left", //왼쪽정렬
        verticalMiddle : false //위쪽정렬
    });
    $("#container5").sliphover({
        withLink : false  //링크해제
    });
});