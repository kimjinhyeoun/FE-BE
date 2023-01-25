$(document).ready(function(){
    //ex1
    $("#ex1 p").click(function(){
        //border:3px solid #cc6699; width:300px; height:200px; padding:5px;
        alert("너비 : "+ $(this).width()+"px"); //너비 300px
        alert("높이 : "+ $(this).height()+"px"); //높이 200px
    });

    //ex2
    $("#ex2 p").click(function(){
        //border:3px solid red; width:500px; height: 300px; padding:5px;
        alert("innerWidth : "+$(this).innerWidth()+"px") //w500+p10(L5+R5) - 510
        alert("innerHeight : "+$(this).innerHeight()+"px") //h300+p10(T5+B5) =310
    });

    //ex3
    $("#ex3 p").click(function(){
        //border:3px solid greenyellow; width:100px; height: 120px; padding:5px; margin:8px;
        alert("outerWidth : "+$(this).outerWidth()+"px") //w100+p10+b6 = 116
        alert("outerWidth : "+$(this).outerWidth(true)+"px") //w100+p10+b6+m16 = 132
    });

    //ex4
    $("#ex4 p").click(function(){
        //border:3px solid blue; width:100px; height: 120px; padding:5px; margin:8px;
        alert("outerHeight : "+$(this).outerHeight()+"px") //H120+p10+b6 = 136
        alert("outerHeight : "+$(this).outerHeight(true)+"px") //w120+p10+b6+m16 = 152
    });

    //ex5
    $("#ex5 img").click(function(){
        //position: absolute; left:100px; top:20px;
        var pos_img = $(this).position();
        alert("이미지의 position-left 위치 : "+pos_img.left+", 이미지의 position-top 위치  : "+pos_img.top); //position-left 위치:100 position-top 위치:20
    });

    //ex6
    $("#ex6 button").click(function(){
        var offset1 = $(this).offset();
        alert("left : "+offset1.left+", top : "+offset1.top); 
        //결과 document기준 left:0 top:1440
    });

});
