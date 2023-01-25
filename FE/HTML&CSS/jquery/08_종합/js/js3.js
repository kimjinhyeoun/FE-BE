$(document).ready(function(){
    //모달태그 추가
    $("body").append("<div id='layer'></div>");

    //로그인, 모달태그 숨김
    $("#login, #layer").hide();

    //개인로그인 클릭시
    $("#quick li:nth-child(2) a").click(function(){
        // $("#login, #layer").show(); //그냥 나오기
        $("#login, #layer").fadeIn(); //서서히 나오기 페이드인
    });

    //로그인, 모달태그에 닫기버튼
    $(".close_login").click(function(){
        $("#login, #layer").fadeOut(); //서서히 닫는다 hide
    });

    //빠른메뉴 개인로그인 기업로그인 
    $("#quick li:nth-child(1) a").addClass("sel");
    $("#quick li a").click(function(){
        $("#quick li a").removeClass("sel");
        $(this).addClass("sel");
    })

    //빠른메뉴
    $("#q1_menu").hide(); //숨겼다가
    $("#quick li:nth-child(1) a").click(function(){ //클릭하면 나온다
        $("#q1_menu").fadeIn(); //서서히
    });
    //빠른메뉴 닫기
    $(".close_btn a").click(function(){
        $("#q1_menu").fadeOut();
    });



});