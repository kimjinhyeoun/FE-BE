$(document).ready(function(){
    //:first-child
    // $("#ex1 ul li:first-child")
    //     .css("background-color","#cccc66"); //1, 6
    // $("#ex1 .list1 li:first-child")
    // .css("background-color","#fc6282"); //1
    // $("#ex1 .list1 li:first")
    //     .css("background-color","#3050ff"); //1
    
    //:last-child
    // $("#ex1 ul li:last-child")
    //     .css("background-color","#3050ff"); //5, 10

    //:nth-child
    // $("#ex1 ul li:nth-child(4)")
    //     .css("background-color","#201925"); //4, 9

    //:nth-child(even) //짝수번째
    // $("#ex1 ul li:nth-child(even)")
    //     .css("background-color","#564842"); //2 4, 7 9

    //:nth-child(odd) //홀수번째
    // $("#ex1 ul li:nth-child(odd)")
    //     .css("background-color","#564842"); //1 3 5, 6 8 10

    //:nth-child(2n) //2의 배수
    // $("#ex1 ul li:nth-child(2n)")
    //     .css("background-color","#878795"); //2 4, 7 9


    //ex2
    // 1> 번호,담당자, 비고(글자색 #cc66ff)
    $("#web tr th:nth-child(odd)")
    .css("color","#cc66ff");
    // 2> 과목,전화번호 (글자색 #66cc66)
    $("#web tr th:nth-child(even)")
        .css("color","#66cc66");
    // 3> 1,3,5,7,9번행 전체 (배경색 #ff9999, 글자색 #990099)
    $("#web tr:nth-child(even)")
    .css("background-color","#ff9999")
    .css("color","#990099");
    // 4> 2,4,6,8,10번행 전체(배경색 #cc9933 글자색 #ff0066)
    $("#web tr:nth-child(odd)")
    .css("background-color","#cc9933")
    .css("color","#ff0066");
    $("#web tr:nth-child(1)")
        .css("background-color","#fff")
    //또는
    // $("#web tr:nth-child(2n+3)")
    //     .css({"background-color":"#cc9933","color":"#ff0066"});
    
    
    //ex3
    //1> 첫번째 p텍스트 변경 -> 1번이미지
    $("#photo p:nth-child(1)")
        .text("1번 이미지");
    //2> 짝수 이미지만 border적용 (점선 2px 붉은색 계열)
    $("#photo p:nth-child(even) img")
    .css("border","2px dotted red");
    //3> 4,8 텍스트색 변경
    $("#photo p:nth-child(4n)")
        .css("color","blue");
    //4> 마지막 이미지의 크기를 3배로 커지게 변경
    $("#photo p:last-child img")
        .css("width","360")
        .css("height","300");
    //5> 6번에서 이미지만 숨기기
    $("#photo p:nth-child(6) img")
        .css("display","none");
});
