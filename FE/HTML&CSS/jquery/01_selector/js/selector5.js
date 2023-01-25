$(document).ready(function(){
    //:hidden
    //숨겨져있는 p태그를 3초동안 화면에 보이게 해라
    $("#ex1 p:hidden") //display:none 되어있는거만 나왔네?
        .show(3000);

    //:visible
    //화면에 보이는 p요소를 2초동안 숨겨라
    $("#ex1 p:visible")
        .hide(2000);
});

//ex2
//브라우저 열리고 3초후에 show()를 한번만 실행해라
function show(){
    $(".none_img:hidden").show(3000); //숨긴이미지
    $("#photo img:first").hide(3000); //첫번째이미지 숨겨
    $("#photo img:first").show("fast"); //첫번째이미지 패스트하게 나와
}
//
setTimeout("show()",3000); //function show 를 3초뒤에 실행하라