$(document).ready(function(){

    $(".j_txt1").not(":last").after("<span class='j_txt2'></span>"); //마지막 span은 제외하고
    $(".join li:first a .j_txt2").addClass("j_txts"); //클래스생성해서 미리입력했던 css에 있는 내용 출력

    $(".btn_prev").css("opacity","0.5"); //이전 버튼

    var i = 0;
    $(".btn_next").click(function(){ //다음 버튼을 클릭하면,
        $(".btn_prev").css("opacity","1.0"); //이전 버튼이 opacity 1로 변경됨.
        if(i < 3){

        
        i++;
        //console.log(i); // 1 2 3
        var move = -600 * i; // 클릭 한번 할때마다 i x 600 = move값이 600씩 증가
        $("#join_con").stop().animate({left : move}, 500);  //내용이 왼쪽으로 600씩 이동한다

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); //화살표 지운다
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts"); //누를때마다 화살표 왼쪽으로
    }
    else{
        alert("마지막 페이지입니다.")
        $(".btn_next").css("opacity","0.5");
    }
    });

    $(".btn_prev").click(function(){ //이전 버튼을 클릭하면,
        $(".btn_next").css("opacity","1.0"); //이전 버튼이 opacity 1로 변경됨.
        if(i > 0){

        
        i--;
        //console.log(i); // 1 2 3
        var move = -600 * i; // 클릭 한번 할때마다 i x 600 = move값이 600씩 증가
        $("#join_con").stop().animate({left : move}, 500);  //내용이 왼쪽으로 600씩 이동한다

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); //화살표 지운다
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts"); //누를때마다 화살표 왼쪽으로
    }
    else{
        alert("첫 페이지입니다.")
        $(".btn_prev").css("opacity","0.5");
    }
    });



});