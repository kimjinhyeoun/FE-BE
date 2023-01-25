$(document).ready(function(){
    // ex1
    $("#photo1 img").mouseover(function(){
        $(this).addClass("photo1_i");
    }).mouseout(function(){
        $(this).removeClass("photo1_i");
    });


    $("#photo2 img").hover(function(){
        $(this).toggleClass("photo2_i") //mouseover 는 안먹는다 hover로 해라.
    });

    // ex2
    $("#ex2 p:eq(0)").addClass("has1");
    $("#ex2 p:eq(0)").click(function(){ //ex2에 첫번째 p태그 클릭시
        if($("#ex2 p:eq(0)").hasClass("has1")){ //has1 이라는 클래스가 있으면 예 없으면 없어요
            alert("예");
        }
        else{
            alert("없어요");
        }
    });

    //ex3
    $(".menu3 li a:first").addClass("selected3");
    $(".menu3 li a").hover(function(){
        $(".menu3 li a").removeClass("selected3");
        $(this).addClass("selected3");
        $(".banner3 img").attr("src",$(this).attr("href"));
    }).click(function(){
        return false;
    });

    //ex4
    $(".menu4 li a:first").addClass("selected4");
    $(".menu4 li a").bind("mouseover",function(){
        $(".menu4 li a").removeClass("selected4");
        $(this).addClass("selected4");
        var num = $(this).attr("data-num");
        $("#ex4").css("background-image","url(images/main_" + num + ".jpg)");
    }).click(function(){
        return false
    });
    
    
    //ex5
    $(".over5").hover(function(){
        var img_roll5 = $(this).attr("href");
        $(".normal5", this).attr("src", img_roll5); //normal 있는자리에 클래스이름을 넣어야함 잘먹음 this가 normarl5의 부모여야함
        var txt_roll5 = $(".tit",this).attr("data-tit1");
        $(".tit", this).text(txt_roll5);
    },function(){
        var img_out5 = $(".normal5", this).attr("data-num");
        $(".normal5", this).attr("src","images/best"+img_out5+".png");
        var txt_out5 = $(".tit",this).attr("data-tit2");
        $(".tit", this).text(txt_out5);
    }).click(function(){
        return false;
    });


});