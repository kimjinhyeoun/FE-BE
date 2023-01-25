$(document).ready(function(){

    $(".j_txt1").not(":last").after("<span class='j_txt2'></span>"); 
    $(".join li:first a .j_txt2").addClass("j_txts"); 

    $(".btn_prev").css("opacity","0.5"); 

    var i = 0;
    $(".btn_next").click(function(){ 
        $(".btn_prev").css("opacity","1.0"); 
        if(i < 3){

        
        i++;
        //console.log(i); // 1 2 3
        var move = -600 * i; 
        $("#join_con").stop().animate({left : move}, 500);  

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); 
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts"); 
    }
    else{
        alert("마지막 페이지입니다.")
        $(".btn_next").css("opacity","0.5");
    }
    });

    $(".btn_prev").click(function(){ 
        $(".btn_next").css("opacity","1.0"); 
        if(i > 0){

        
        i--;
        //console.log(i); // 1 2 3
        var move = -600 * i; 
        $("#join_con").stop().animate({left : move}, 500);  

        var n = 1;
        var k = n+i;
        // console.log(k); // 2 3 4
        $(".join li a").removeClass("j_sel")
        $(".join .join"+k+" a").addClass("j_sel"); //.join .join2 a ~ .join4 a

        $("span.j_txt2").removeClass("j_txts"); 
        $(".join .join"+k+"  a span:eq(1)").addClass("j_txts");
    }
    else{
        alert("첫 페이지입니다.")
        $(".btn_prev").css("opacity","0.5");
    }
    });
    $("#chk1").change(function(){ //내용 변경/교체 되는것 select, radio, checkbox에 유효
        var chk1 = $("#chk1").prop("checked"); //prop는 true값과 false값이 나온다.
        if(chk1 == true){
            $("#chk2, #chk3").prop("checked", true);
            $(".check01").addClass("checked");
        }
        else{
            $("#chk2, #chk3").prop("checked", false);
            $(".check01").removeClass("checked");
        }
    })

    // -개인정보처리방침(선택)/개인정보 제3자제공동의(선택)
    $(".chk_h1").hide();
    $(".chk_h2").hide();
    $("#chk2, #chk3").change(function(){
        var chk2 = $("#chk2").prop("checked");
        var chk3 = $("#chk3").prop("checked");
        if(chk2 == true){ //개인정보처리방침(선택)
            $(".check03").addClass("checked");
            $(".chk_h1").show();
            $(".check04").hide();
        }
        else{
            $(".check03").removeClass("checked");
            $(".chk_h1").hide();
            $(".check04").show();
        }
        if(chk3 == true){ //개인정보 제3자제공동의(선택)
            $(".check04").addClass("checked");
            $(".chk_h2").show();
        }
        else{
            $(".check04").removeClass("checked");
            $(".chk_h2").hide();
        }
        if(chk2 == true && chk3 == true ){
            $(".check02").addClass("checked");  
            $(".chk_h2").hide();
        }
        else{
            $(".check02").removeClass("checked");
        }
    })
    
    // 사용가능합니다.
    $("#frm10").submit(function(){
        if($("#name10").val()==""){
            if($(".txt10").text()==""){
            $("#name10").css("border","2px solid red").after("<span class='txt10'>사용하실 아이디를 입력해주세요.</span>");
            $(".txt10").css({"color":"red","font-size":"11px"});
            }
            return false;
        }
    });
    //이메일 뒷주소 입력창
    $("#email_list").change(function(){
        $("#email4 span input").val($(this).val()).css("color","#999");
        if($(this).val() == ""){
            $("#email4 span input").val("입력하세요.").one("focus",function(){
                $(this).val("");
            });
        }
    });

    //비밀번호
    $(".pwd1_con").hide();
    $("#pwd1").focus(function(){
        $(".pwd1_con").show();
    }).blur(function(){
        $(".pwd1_con").hide();
    });

});