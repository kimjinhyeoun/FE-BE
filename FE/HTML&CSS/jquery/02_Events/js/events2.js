$(document).ready(function(){
    //1.click()
    $(".evt1")
        .click(function(){
            $("#event")
                .css("background-color","#ccffff");
        });
        

    
    //2.dblclick() 더블클릭
    $(".evt2")
        .dblclick(function(){
            $("#event")
                .css("border-color","#990066")
                .text("더블클릭");
        });


    //3 .mouseover()   .mouseout()
    //마우스 올려놓으면
    $(".evt3")
        .mouseover(function(){
            $("#event")
                .text("확인!!");
    });

    //마우스 벗어날때
    $(".evt3").mouseout(function(){
        $("#event").text("취소!!");
    });


    //4 .mouseover()   .mouseout() 같은 클래스한테 효과줄때 바로뒤에 .찍어서 이렇게도 사용한다
    $(".evt4")
        .mouseover(function(){
            $("#event")
                .css("width","150px")
                .text("")
        }).mouseout(function(){
            $("#event")
                .css("width","50px")
        });


    //5 .hover
    $(".evt5")
        .hover(function(){
            $("#event").css("background-image","url(images/img2.png)")
        },function(){
            $("#event")
                .css("background-image","");
        });



    //6. mousedown()  .mouseup()
    $(".evt6").mousedown(function(){
        $("#event")
            .css("background-image","url(images/img4.png)")
            .css("background-repeat","no-repeat")
            .css("background-position","center")
            .text("");
    }).mouseup(function(){
        $("#event")
            .css("background-image","url(images/img5.png)");
    });

    

    //7 .mouseenter()   .mouseleave()
    $(".evt7").mouseenter(function(){
        $("#event").css("background-image","url(images/img2.png)");
    }).mouseleave(function(){
        $("#event").css("background-image","url(images/img3.png)");
    });




    //8 .contextmenu()
    //마우스 우클릭
    $(".evt8")
        .contextmenu(function(){
            $("#event").css("background-color","green");
        });


    

    //9. .focusin()  .focusout()
    $(".evt9").focusin(function(){
        $("#event").css("border-width","5px");
    }).focusout(function(){
        $("#event").css("border-width","");
    });


    //10. .mousemove()
    //event.pageX / event.pageY 또는 e.pageX / e.pageY
    $(document).mousemove(function(event){
        $(".evt10 span").text("x좌표:"+event.pageX+", Y좌표: "+event.pageY);
    })


    ///////////////////////////////////////////////


    //menu
    //순서중요함
    $(".menu li a:first")
        .css({"text-decoration":"underline","color":"#ff0000"});
    $(".menu li a")
        .click(function(){
            $(".menu li a")
            .css({"text-decoration":"","color":""})
            $(this)
            .css({"text-decoration":"underline","color":"#ff0000"});

        });

















});



    
    
