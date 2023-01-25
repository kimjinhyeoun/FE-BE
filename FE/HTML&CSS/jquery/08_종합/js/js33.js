$(document).ready(function(){
    //wrap
    $("#wrap").on("mousewheel", function(event, delta){
        // console.log(delta);  // 1 : 사진에 포인터대고 위로 올렸을때 / -1 : 사진에 포인터대고 아래로 내렸을때
        if(delta > 0){ //휠 위로 올리면
            $("#wrap p img").attr("src","images/img12_l.jpg");
        }
        else{ //휠 아래로 내리면
            $("#wrap p img").attr("src","images/img10_l.jpg");
        }
        return false; //기본적인 마우스휠 기능제거
    });

    //wrap2
    $("#wrap2").on("mousewheel", function(event, delta){
        // console.log(delta);  // 1 : 사진에 포인터대고 위로 올렸을때 / -1 : 사진에 포인터대고 아래로 내렸을때
        if(delta > 0){ //휠 위로 올리면
            $("#wrap2").scrollTop($("#wrap2").scrollTop()+280);
        }
        else{ //휠 아래로 내리면
            $("#wrap2").scrollTop($("#wrap2").scrollTop()+ -280);
        }
        return false; //기본적인 마우스휠 기능제거
    });

    //wrap3
    $("#wrap3").on("mousewheel", function(event, delta){
        // console.log(delta);  // 1 : 사진에 포인터대고 위로 올렸을때 / -1 : 사진에 포인터대고 아래로 내렸을때
        if(delta > 0){ //휠 위로 올리면
            $("#wrap3").scrollLeft($("#wrap3").scrollLeft()+300);
        }
        else{ //휠 아래로 내리면
            $("#wrap3").scrollLeft($("#wrap3").scrollLeft()+ -300);
        }
        return false; //기본적인 마우스휠 기능제거
    });



    //wrap4
    $("#wrap4").on("mousewheel", function(event, delta){
        // console.log(delta);  // 1 : 사진에 포인터대고 위로 올렸을때 / -1 : 사진에 포인터대고 아래로 내렸을때
        if(delta > 0){ //휠 위로 올리면
            $("#wrap4").stop().animate({scrollLeft :$("#wrap4").scrollLeft()+600}, 500);
        }
        else{ //휠 아래로 내리면
            $("#wrap4").stop().animate({scrollLeft :$("#wrap4").scrollLeft()+ -600}, 500);
        }
        return false; //기본적인 마우스휠 기능제거
    });


    //wrap5
    $(".wrap5_2").on("mousewheel", function(event, delta){
        // console.log(delta);  // 1 : 사진에 포인터대고 위로 올렸을때 / -1 : 사진에 포인터대고 아래로 내렸을때
        if(delta > 0){ //휠 위로 올리면
            $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop()+ -50);
        }
        else{ //휠 아래로 내리면
            $(".wrap5_2").scrollTop($(".wrap5_2").scrollTop()+50);
        }
        return false; //기본적인 마우스휠 기능제거
    });
});