$(document).ready(function(){


    //키보드이벤트 Keyboard Event

    //이름
    $("#name")
    .keydown(function(){
        // $("#name")
            // .css("background-color","#cccc33")
        $(this)
            .css("background-color","#cccc33")
    });
    $("#name")
    .keyup(function(){
        // $("#name")
        //     .css("background-color","")
        $(this)
            .css("background-color","")
    });


    //이메일 keydown
    //글자 입력할때마다 칸 옆에 .에서 숫자증가
    var i = 0;
    $("#email1")
        .keydown(function(){
            $(".txt1")
                .text(i+=1);
        });
    
    //이메일2 keypress
    //글자 입력할때마다 칸 옆에 .에서 숫자증가
    //한글 인식 안됨
    var j = 0;
    $("#email2")
        .keypress(function(){
            $(".txt2")
                .text(j+=1);
        });



    //마우스이벤트 Mouse Event
});