$(document).ready(function(){
    //ex1
    $(".btn1").click(function(){ //show
        // $(".box1").show(1000);
        $(".box1").show();
    })
    $(".btn2").click(function(){ //hide
        $(".box1").hide();
    })
    $(".btn3").click(function(){ //toggle
        $(".box1").toggle();
    })
    $(".btn4").click(function(){ //callback
        $(".box1").show(1000, function(){
            alert("Hello world!");
        });
    });


    //ex2
    $(".btn5").click(function(){ //slideUp 아래에서 위로 올려 비표시 (hide)
        $(".box2").slideUp(1000);
    });
    $(".btn6").click(function(){ //slideDown 위에서 아래로 내려 표시 (show)
        $(".box2").slideDown(1000);
    });
    $(".btn7").click(function(){ //slideToggle slideUp+slideDown
        // $(".box2").slideToggle(1000); 얘는 눌린만큼 계속 효과가 왔다갔다함 그래서 밑에꺼 쓰면 됨
        $(".box2:not(:animated)").slideToggle(1000);  //얘는 위에서 설명했듯이 마우스 멈추면 얘도 멈춤
    });
    $(".btn8").click(function(){ //callback
        $(".box2").slideUp(1000, function(){
            $(this).slideDown(1000);
        });
    });


    //ex3
    $(".list_li2 div").hide();
    $(".list_li2").toggle(function(){ //상품신청
        $(".list_li2 div:not(:animated)").slideDown();
        $("#list_li2a").addClass("sel");
        $(".list_li2 span").text("-")
    }, function(){
        $(".list_li2 div:not(:animated)").slideUp();
        $("#list_li2a").removeClass("sel");
        $(".list_li2 span").text("+")
    });



});