$(document).ready(function(){
    //:contains
    $("#ex1 ul li:contains('웹')") //웹이라는 글자를 포함한 모든 태그들 명령
        .css("color","red");


    //:empty 
    $("#ex2 ul li:empty") //아무것도 적혀있지않은 애들(스페이스바x 엔터x)
        .css("background-color","lightgreen")
        .text("jquery")
        .css("color","darkgreen");



    //:parent //내용이 있거나, 없거나 스페이스랑 엔터도 포함
    $("#ex3 ul li:parent")
        .text("parent");



    //:has()
    $("#ex4 div:has(h3)") // h3이 있는 div에 적용을 시켜라
        .css("border","3px solid lightgreen");

    $("#ex4 div:not(:has(h2))") // h2를 제외한 모든 div한테 적용을 시켜라
        .css("background-color","yellow");

});