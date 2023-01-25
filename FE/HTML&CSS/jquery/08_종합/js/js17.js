$(document).ready(function(){
    //img_wrap
    var img_fade = setInterval(function(){
        var showImg = $("#img_wrap p:eq(0)");
        var nextImg = $("#img_wrap p:eq(1)");
        nextImg.addClass("selected"); //$("#img_wrap p:eq(1).addClass('selected')");와 같다
        nextImg.css("opacity","0").animate({opacity : 1},1000, function(){
            showImg.appendTo("#img_wrap").removeClass("selected");
        });
    },3000);
});