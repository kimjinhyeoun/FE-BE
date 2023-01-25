$(document).ready(function(){
    // ex1
    $("#ex1 > p")
        .css("background-image","url(images/img3.gif)")
        .css("width","120px")
        .css("height","100px")
        .css("color","#ff3333")
        .text("뽀로로");
    // ex2
    $("#ex2 p")
        .css({
            "border-bottom":"3px double #9900cc",
            "width":"120px",
            "text-align":"center"
        });

    // ex3
    $(".ex3_1 + li") //지목한 태그 : 2
        .css("background-image","url(images/img3.gif)"); 
    // ex4
    $(".ex4_2 ~ li") //지목한 태그 : 3,4,5
        .css("background-color","yellow") 
});