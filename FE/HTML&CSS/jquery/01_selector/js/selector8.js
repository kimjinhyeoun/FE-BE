$(document).ready(function(){
    //:nth-of-type()
    $("#ex1 ul li:nth-of-type(2)")
        .css("background-color","#ff9933"); //2, 7

    //ex2
    $("#ex2 > p:nth-of-type(2)")
        .css("background-color","#ff9933"); //p2

    $("#ex2 p:nth-of-type(2)")
        .css("color","blue"); //div_p2, p2 


    //only-child
    //ex3
    //아무태그없이 스트롱 하나만 들어간것만 적용된다
    $("#ex3 .list3 li strong:only-child") 
        .css("background-color","#cd645a"); 
    $("strong:only-child")
        .css("color","pink");
    

    //only-of-type
    //스트롱 하나만있긴한데 다른태그도 있어도 된다 스트롱태그가 두개인경우는 안됨
    $("#ex3 .list3 li strong:only-of-type")
        .css("border","3px solid green")
    $("strong:only-of-type")
        .css("font-size","12px");  
});