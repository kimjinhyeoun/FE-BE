$(document).ready(function(){
    //bottom1
    $("#bottom1 > select option:eq(0)").prop("disabled", true);
    $("#bottom1 > select").change(function(){
        var selectValue = $("#bottom1 > select option:selected").val(); //선택한 option의 value
        window.open(selectValue); //새창(탭)으로 selectValue 띄우기
        $("#bottom1 > select").find("option:eq(0)").prop("selected", true);
    });

    //bottom2
    $("#family_site2 > ul").slideUp(0);
    var cnt1 = 1;
    $("#family_site2 > button").click(function(){
        if(cnt1 == 1){
            $("#family_site2 > ul:not(:animated)").slideDown("fast");
            $(".icon2").text("∨"); //ㄷ한자
            cnt1 = 0;
        }
        else{
            $("#family_site2 > ul:not(:animated)").slideUp("fast");
            $(".icon2").text("∧"); //ㄷ한자
            cnt1 = 1;
        }
    });

    //bottom3
    $("#family_site3 > ul").animate({top : 150},0);
    var cnt2 = 1;
    $("#family_site3 > button").click(function(){
        if(cnt2 == 1){
            $("#family_site3 > ul:not(:animated)").animate({top : 1},"fast");
            $(".icon3").text("∧"); //ㄷ한자
            cnt2 = 0;
        }
        else{
            $("#family_site3 > ul:not(:animated)").animate({top : 150},"fast");
            $(".icon3").text("∨"); //ㄷ한자
            cnt2 = 1;
        }
    });

});