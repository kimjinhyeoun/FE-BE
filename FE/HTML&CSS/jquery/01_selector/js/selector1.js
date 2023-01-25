$(document).ready(function(){
    //ex1
    // $("*").css("border","1px dotted #ff3366");
    $("li *").css({"font-size": "30px", "border" : "2px solid #cc0000"});

    //img_wrap
    $(".img1").css("border","3px solid #cc0066");
    $(".photo1").css("border-color","#66cccc");
    $(".photo2").css("padding","10px");

    //element seletor
    //글자색, 글자크기, 배경색, 글자굵기보통
    $("h1")
        .css("color","#cc33cc")
        .css("font-size","20px")
        .css("background-color","#ffcc66")
        .css("font-weight","normal"); //이렇게 .css로 이어서 작성가능! 주의) 세미콜론은 맨 끝에 들어감
    $("h2").css({
        "color":"#ffcc66",
        "font-size":"30px",
        "background-color":"#cc3366",
        "font-weight":"normal"
    });
    $("h3").css({ //큰따옴표없이 작성시엔 하이픈이 있는 태그는 뒤에있는 첫 글자를 대문자로 하면 쓸 수 있음
        color:"#ccff66",
        fontSize:"40px",
        backgroundColor:"#cc3366",
        fontWeight:"normal"
    });
    //ex2
    $("#ex2_2").css({
        backgroundColor:"#eac1ea",
        color:"#ff2829"
    });
    // selector1, selectorN
    $(".box1, .box2, #box3")
        .css({
            "border":"1px solid #666",
            "width":"120px",
            "height":"100px",
            "float":"left",
            "margin":"10px",
            "text-align":"center",
            "line-height":"100px",
            // "background-image":"url(../images/img4.gif)" css 경로임 jquery는 html 위치에서 불러오면 됨
            "background-image":"url(images/img4.gif)"
        });
});