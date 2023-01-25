$(document).ready(function(){
    //ex1
    //$(selector).prop() selector의 속성
    //$(selector).attr() selector의 속성
    $(".btn1_1").click(function(){ //prop
        var a = $(".ex1 a").prop("href");
        alert(a); //http://m.naver.com
    });
    $(".btn1_2").click(function(){ //attr
        var b = $(".ex1 a").attr("href");
        alert(b); //http://m.naver.com
    });
    $(".btn2_1").click(function(){ //prop
        var c = $(".ex2 input:nth-child(1)").prop("checked");
        alert(c); //체크가 되어있으면 true / 해제가 되어있으면 false값으로 출려됨
    });
    $(".btn2_2").click(function(){ //attr
        var d = $(".ex2 input:nth-child(1)").attr("checked");
        alert(d); //체크되어있으면 checked / 해제가되어있어도 checked
    });


    //wrap2
    //전체선택/전체해제
    $("#chk1").change(function(){ //내용 변경/교체 되는것 select, radio, checkbox에 유효
        var chk1 = $("#chk1").prop("checked"); //prop는 true값과 false값이 나온다.
        if(chk1 == true){
            $("#chk2, #chk3").prop("checked", true);
            $(".type01").addClass("checked");
        }
        else{
            $("#chk2, #chk3").prop("checked", false);
            $(".type01").removeClass("checked");
        }
    })

    // -개인정보처리방침(선택)/개인정보 제3자제공동의(선택)
    $("#chk2, #chk3").change(function(){
        var chk2 = $("#chk2").prop("checked");
        var chk3 = $("#chk3").prop("checked");
        if(chk2 == true){ //개인정보처리방침(선택)
            $(".type03").addClass("checked");
        }
        else{
            $(".type03").removeClass("checked");
        }
        if(chk3 == true){ //개인정보 제3자제공동의(선택)
            $(".type04").addClass("checked");
        }
        else{
            $(".type04").removeClass("checked");
        }
        if(chk2 == true && chk3 == true ){
            $(".type02").addClass("checked"); //체크가 풀리면 전체선택도 풀리는것 그리고    전체선택 한번 더 클릭시 모두 체크박스 풀림
        }
        else{
            $(".type02").removeClass("checked");
        }
    })
    


});