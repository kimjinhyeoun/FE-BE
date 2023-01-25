$(document).ready(function(){

    $(".j_txt1").not(":last").after("<span class='j_txt2'></span>"); 
    $(".join li:first a .j_txt2").addClass("j_txts"); 

    $(".btn_prev").css("opacity","0.5"); 

    var i = 0;
    $(".btn_next").click(function(){ 
        $(".btn_prev").css("opacity","1.0"); 
        if(i < 3){

        
        i++;
        //console.log(i); // 1 2 3
        var move = -600 * i; 
        $("#join_con").stop().animate({left : move}, 500);  

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); 
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts"); 
    }
    else{
        alert("마지막 페이지입니다.")
        $(".btn_next").css("opacity","0.5");
    }
    });

    $(".btn_prev").click(function(){ 
        $(".btn_next").css("opacity","1.0"); 
        if(i > 0){

        
        i--;
        //console.log(i); // 1 2 3
        var move = -600 * i; 
        $("#join_con").stop().animate({left : move}, 500);  

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); 
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts");
    }
    else{
        alert("첫 페이지입니다.")
        $(".btn_prev").css("opacity","0.5");
    }
    });
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
            $(".check03").addClass("checked");
        }
        else{
            $(".check03").removeClass("checked");
        }
        if(chk3 == true){ //개인정보 제3자제공동의(선택)
            $(".check04").addClass("checked");
        }
        else{
            $(".check04").removeClass("checked");
        }
        if(chk2 == true && chk3 == true ){
            $(".check02").addClass("checked"); //체크가 풀리면 전체선택도 풀리는것 그리고    전체선택 한번 더 클릭시 모두 체크박스 풀림
        }
        else{
            $(".check02").removeClass("checked");
        }
    })


});