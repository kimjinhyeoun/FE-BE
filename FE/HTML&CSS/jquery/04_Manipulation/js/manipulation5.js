//ex1
function ex1(){
    $("#ex1 p").first().appendTo("#ex1");
}
setInterval("ex1()",2000);

//ex2
$(document).ready(function(){
    var ex2 = setInterval(function(){
        $("#ex2 p").first().appendTo("#ex2");
    },2000);

//ex3
var banner = setInterval(function(){
    $("#ex3 p").first().appendTo("#ex3");
},2000);

$("#ex3").mouseover(function(){
    clearInterval(banner);
    // $(".txt").text("멈췄나");
}).mouseout(function(){
   banner = setInterval(function(){
    $("#ex3 p").first().appendTo("#ex3");
   },2000);
//    $(".txt").text("다시ㄱㄱ");
});
    
});
