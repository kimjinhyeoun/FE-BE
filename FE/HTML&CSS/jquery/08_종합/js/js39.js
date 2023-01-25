$(document).ready(function(){
    //
    //$(selector).focus() 포커스가 잇을때
    //$(selector).blur() 포커스가 잃을때
    $(".pwd1_con").hide();
    $("#pwd1").focus(function(){
        $(".pwd1_con").show();
    }).blur(function(){
        $(".pwd1_con").hide();
    });

    //$(selector).one(); 이벤트를 한번만 실행
    $("#name2").val("입력하세요.").css("color" , "#999").one("focus",function(){
        $(this).val("").css("color","#9966cc");
    }).blur(function(){
        if($(this).val() == ""){
            $(this).val("입력하세요.").css("color","#999").one("focus",function(){
                $(this).val("").css("color","#9966cc");
            })
        }
    });


    //$(selector).change() 요소의 값 변경
    $("#select3").change(function(){
        //span의 텍스트를 선택한 option의 value값으로 변경
        $("#txt3 span").text( $(this).val() );
    });

    //이메일 뒷주소 입력창
    $("#email_1").focus().css("color","#999");
    $("#email_list").change(function(){
        $("#email4 span input").val($(this).val()).css("color","#999");
        if($(this).val() == ""){
            $("#email4 span input").val("입력하세요.").one("focus",function(){
                $(this).val("");
            });
        }
    })


    //수강과목 선택란에 선택시 수강과목/수강료에 자동입력칸
    $("select[name='list5']").change(function(){
        $("#list5_1").val( $(this).val() );
        if($("select[name='list5']").val()=="illustrator"){
            $("#list5_2").val("300,000");
        }
        else if($("select[name='list5']").val()=="photoshop"){
            $("#list5_2").val("250,000");
        }
        else if($("select[name='list5']").val()=="flash"){
            $("#list5_2").val("200,000");
        }
        else if($("select[name='list5']").val()=="dreamweaver"){
            $("#list5_2").val("150,000");
        }
        else{
            $("#list5_2").val("");
            alert("과목을 선택하세요.");
        }
    })

    //선택창에서 이미지 선택시 밑에 이미지 변경
    $("#select6").change(function(){
        //width 전에 한칸 띄는거 생각해야함.
        $("#photo6").html("<img src="+$(this).val()+" width='300' height='200' >");
    });

    
    
    //
    $("#con_wrap7 p:not(:first)").hide();
    $("#select7").change(function(){
        $("#con_wrap7 p").hide();
        var n7 = $(this).val();
        $("#con_wrap7 #co"+n7).show();
    });


    //
    $("select[name='select8']").change(function(){
        //선택한 select의 value가 10이면 입력불가
        if($("select[name='select8'] :selected").attr("value")=="10"){
            //:enabled  :disabled-입력못하게 막는거 
            $("#sel_t").attr("disabled","disabled").val("").after("<span class='txt8'>입력할 수 없습니다.</span>");
            $(".txt8").css("color","#990000");
            //10대를 선택시 after를 통해서 span태그와 span클래스인 txt8을 만듬 그리고 입-할 나오게하는거
        }
        else{
            $("#sel_t").removeAttr("disabled").val("");
            $(".txt8").remove();
            //다른 선택지 선택시 안나오게하는것
        }
    })




    //
    //좌측 value와 우측 class의 숫자와 연결
    $("#select9_2 option").hide(); //일단 서초구 중구 수원시 감춰라
    $("#select9_1").change(function(){ //서울 인천 경기도
        var n9 = $(this).val();  // 좌측 value와 우측 class연결 1단계
        $("#select9_2 option").hide();
        $("#select9_2 .s"+n9).show();
        $("#select9_2").val("선택하세요"); //이거 따로 안주면 선택직전까지 기억하고있음
    });



    //
    //$(selector).submit() //폼이베트 / 양식이 전송 될 때 발생
    $("#frm10").submit(function(){
        if($("#name10").val()==""){
            if($(".txt10").text()==""){
            $("#name10").css("border","2px solid #990000").after("<span class='txt10'>필수입력칸입니다.</span>");
            $(".txt10").css({"color":"red","font-size":"11px"});
            }
            return false;
        }
        
    });


    //
    $("#btn11_1").mouseover(function(){
        $(this).after("<span class='txt11_1'>입력한 내용을 서버로 전송합니다.</span>");
        $(".txt11_1").css("color","#990000");
    }).mouseout(function(){
        $(".txt11_1").remove();
    });
    $("#btn11_2").one("click",function(){
        $(this).after("<span class='txt11_2'>입력한 내용이 모두 초기화 됩니다.</span>");
        $(".txt11_2").css("color","#990000");
    })




    //
    $("#chk12").val("선택하세요").css({"color":"#99999"});
    $("input[name='chk12']").change(function(){
        $("#chk12").val($(this).val()+"선택");
    })



    //
    $("#radio_all :radio").change(function(){
        $(".list13").css({"font-weight":"","color":"","background-color":""})
        //input id == label for
        $("label[for="+ $(this).attr("id") +"]").css({"font-weight":"bold","color":"#990000","background-color":"yellow"})
    });

    //
    $("#txt14").hide();
    $("#chk14").click(function(){
        $("#txt14").toggle();
    });


    //
    $("#plus").click(function(){
        var num_t = $(".num_txt").text(); //span
        var num = parseInt(num_t);
        num++;

        if(num > 10){
            alert("10까지만 입력가능합니다.")
            num=10;
        }
        $(".num_txt").text(num); //span
    });
    $("#minus").click(function(){
        var num_t = $(".num_txt").text(); //span
        var num = parseInt(num_t);
        num--;

        if(num <= 0){
            alert("최소 1개까지 입력가능합니다.")
            num=1;
        }
        $(".num_txt").text(num); //span



        //
        $("#chk16").click(function(){
            if($("#pwd16").attr("type")=="password"){
                $("#pwd16").attr("type","text");
            }
            else{
                $("#pwd16").attr("type","password");
            }
        });
    });






































});