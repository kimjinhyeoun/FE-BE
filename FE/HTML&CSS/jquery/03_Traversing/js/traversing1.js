$(document).ready(function(){
    //.first()
    // $("#main1 p").first().css("background-color","#cccccc"); //middle2의 p
    // $("#main1 p:first").css("background-color","#cccccc"); //middle2의 p
    // $("#main1 > p").first().css("background-color","#cccccc");//middle2의 자식요소 p2가 적용


    //.last()
    // $("#main1 p").last().css("background-color","#fc3"); //sub1의 p
    

    //.eq()
    // $("#main1 p").eq(2).css("background-color","#df9"); //p2


    //.filter()
    // $("#main1 div").filter(".middle2").text("middle2 적용"); //middle2 div의 텍스트 변경


    //.not()
    // $("#main1 div").not("#sub1").hide(); //#sub1제외하고 다 숨김


    //.slice()
    $("#slice1 p").slice(1,5).css("background-color","blue"); //2~5번
    $("#slice1 p").slice(2).css({"border-width":"4px","border-color":"#cc0033"}); //3~10번
    $("#slice1 p").slice(-5).css("color","red"); //끝에서 5개 6~10번


    //.find()
    $("#main2").find('p').css("background-color","skyblue"); //box2의 p, p1, p2



    //.children()
    $("#main2").children("p").css("background-color","hotpink"); //p1,p2


    //.closest()
    // $("p.txt2").closest("div").css("background-color","purple");
    $("p.txt2").closest("#main2").css("background-color","purple");


    //.prev()
    // $("p.txt3").prev().css("background-color","#ff9900"); //p2


    //.prevAll()
    // $("p.txt3").prevAll().css("background-color","#ff9900"); //p3 앞에 전체(div, p1, p2)

    //.next()
    // $("p.part3").next().css("background-color","#ff9900"); //p2

    //.nextAll()
    // $("p.part3").nextAll().css("background-color","#ff9900"); //p2, p3

    //.siblings()
    $("p.part3").siblings().css("background-color","#ff9900"); //div, p2, p3


    //.nextUntil()
    // $("#main4 h2").nextUntil("#main4 h5")
    //     .css({"color":"#ff9900","border":"2px solid #cc0033"}); //h3, h4


    //.parent()
    $("#main4 span").parent()
        .css({"color":"#ff9900","border":"2px solid #cc0033"}); // #main4
    
    // $("#main5 span").parent() // #main5 span의 위에 li, main5의 span위에 p
    //     .css({"color":"#cc95ff","border":"2px solid #ffaa95"}); 

        
    //.parents()
    // $("#main5 span").parents() //span을 감싸고있는 모든 영역이 다들어감 body도 포함되어있음.
    //     .css({"color":"#cc95ff","border":"2px solid #ffaa95"});
    // $("#main5 span").parents("ul") //span을 감싸고있는 ul만 적용됨
    //      .css({"color":"#cc95ff","border":"2px solid #ffaa95"});
    // $("#main5 span").parents("div") //span을 감싸고있는 div다 들어감
    //      .css({"color":"#cc95ff","border":"2px solid #ffaa95"});

    //.parentsUntil()
    $("#main5 span").parentsUntil("div") //span과 div 사이에있는 요소들이 적용됨
         .css({"color":"#cc95ff","border":"2px solid #ffaa95"});

    //.add()
    $(".btn1").click(function(){ //확인1
        $("#main6 div")
        .css("background-color","#ff9933"); //div에 적용
    });
    $(".btn2").click(function(){ //확인2
        $("#main6 div") 
        .add("#main6 span")
        .css("background-color","#ccffcc"); //div+span에 적용
    });
    $(".btn3").click(function(){ //확인3
        $("#main6 div")
        .add("#main6 span")
        .add("#main6 p")
        .css("background-color","#66ff99"); //div+span+p에 적용
    });




});