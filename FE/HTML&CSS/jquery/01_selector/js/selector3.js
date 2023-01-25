$(document).ready(function(){
    //:eq()
    // $("#ex1 p:eq(1)")
    // .css("border", "1px solid #ff6666"); //내용 p 두번째 p
    // $("#ex2 ul li:eq(0)")
    //     .css("background-color","#ffcc66"); //내용 li 첫번째 li
    // $("#ex2 ul li:eq(5)")
    //      .css("background-color","#ffcc66"); //내용 li 여섯번째 li
    // $("#ex2 .list2 li:eq(0)")
    //     .css("background-color","#ffcc66"); //내용 클래스 list2에 첫번째 li
    
    //:gt()
    // $("#ex2 ul li:gt(3)")
    //     .css("background-color","#ffccff"); //ex2안에 ul에 li 네번째꺼부터 전체 백그라운드컬러준다. gt

    //:lt()
    // $("#ex2 ul li:lt(3)")
    // .css("background-color","#ffccff"); // 인덱스 3 밑에있는애들 전체 2,1,0 에 백그라운드컬러 준다 

    //:first    :last
    // $("#ex2 ul li:first")
    //     .css("background-color","#ffccff"); //첫번째 li

    // $("#ex2 ul li:last")
    //     .css("background-color","#ffccff"); //마지막번째 li

    //:even
    // $("#ex2 ul li:even")
    //      .css("background-color","#ffccff");


    //:odd
    // $("#ex2 ul li:odd")
    //      .css("background-color","#ffccff");

    //:not()
    //첫번째 li제외하고 배경색,글자색
    // $("#ex2 ul li:not(:first)") //조건 first - 첫번째 li 제외한 모든애들이 적용됨
    //      .css("background-color","#ffccff")
    //      .css("color","blue");

    //:header
    // $("#ex1 :header") //제목 h1, 제목 h2
    //     .css("text-decoration","underline");

    $("section *:header") //section에 있는 모든 h태그들 적용
        .text("header 테스트")
        .css("color","#6666ff");


    //:root
    $(":root") //html 전체 바디라고 생각하면 될듯
        .css("border","10px solid red");


    //:lang
    $(".ex3 p:lang(en)")
        .css("background-color","pink");




    //gallery
    //1> 마지막번째 li화면에서 숨기기
    // $("#gallery ol li:last")
    //     .css("display","none");

    //2> (3)번 제외한 li 숨기기
    // $("#gallery ol li:not(:eq(2))")
    //      .css("display","none");

    //3> (2,4,6,8,10)번 제외한 li 숨기기
    // $("#gallery ol li:even") //또는 :not(:odd)
    //       .css("display","none");

    //4> (1,2,3,4) 번 li숨기기
    // $("#gallery ol li:lt(4)") //index 번호 4번이 그림으론 5번인데 5번보다 숫자낮은애들을 숨김처리한거임
    //       .css("display","none");

    // //5> (7,8,9,10)번 li 숨기기
    // $("#gallery ol li:gt(5)")
    //       .css("display","none");

});