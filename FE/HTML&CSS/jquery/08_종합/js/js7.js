$(document).ready(function(){
    

    $("#faq dd:not(:first)").hide(); //모든 dd를 숨긴다 하지만 첫번째 빼고
    $("#faq dt:first a").addClass("selected"); //첫번째 a한테 새로만든 클래스를 추가

    $("#faq dt a").click(function(){ // a를 클릭할떄
        $("#faq dt a").removeClass("selected"); //다른 a들은 사라짐
        $(this).addClass("selected");  //클릭한 모든 a한테 새로만든 클래스를 추가한다.
        if($(this).parent().next().css("display")=="none"){
            $("#faq dd").slideUp("fast"); //클릭하면 다시 올라간다.
            $(".star_wrap img").attr("src","images/star1.png"); //별점이 저장되었는데 그걸 뺀거임
        }
        $(this).parent().next().slideDown("fast"); //parent는 부모를 말함 / 클릭한 a부모(dt) 뒤에있는 dd
    });

    //별점 별
    $(".star_wrap img").click(function(){
        $(".star_wrap img").attr("src","images/star1.png");
        $(this).attr("src","images/star2.png");
        $(this).prevAll("img").attr("src","images/star2.png");
    });
});