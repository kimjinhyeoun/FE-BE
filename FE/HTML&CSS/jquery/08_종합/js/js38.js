$(document).ready(function(){
    var page =1;

    $(window).mousewheel(function(){
        return false;
    });

    $(".box").on("mousewheel",function(event, delta){
        page = $(this).attr("data-n") - delta;
        var target = $(".box"+page).offset().left;
        $("body, html").stop().animate({"scrollLeft":target},500);
        return false;
    }); //mousewheel

    $(window).scroll(function(){
        var offset1 = $(".box1").offset().left;
        var offset2 = $(".box2").offset().left;
        var offset3 = $(".box3").offset().left;
        var offset4 = $(".box4").offset().left;
        var offset5 = $(".box5").offset().left;

        var st = $(window).scrollLeft();

        $("#gnb ul li a").removeClass("sel1"); //공통
        $(".circle").removeClass("sel2");
        
        if(st < offset2){ //1페이지
            $(".menu1").addClass("sel1");
            $(".circle1").addClass("sel2");
        }
        else if(st >= offset2 && st < offset3){ //2페이지
            $(".menu2").addClass("sel1");
            $(".circle2").addClass("sel2");
        }
        else if(st >= offset3 && st < offset4){ //3페이지
            $(".menu3").addClass("sel1");
            $(".circle3").addClass("sel2");
        }
        else if(st >= offset4 && st < offset5){ //4페이지
            $(".menu4").addClass("sel1");
            $(".circle4").addClass("sel2");
        }
        else{
            $(".menu5").addClass("sel1");
            $(".circle5").addClass("sel2");
        }
        return false;
    });//scroll


    $("#gnb ul li a, .circle").click(function(){ //공통
        page = $(this).attr("data-n");
        var target = $(".box"+page).offset().left;
        $("body, html").stop().animate({"scrollLeft":target},1000);
        return false;
    });


});