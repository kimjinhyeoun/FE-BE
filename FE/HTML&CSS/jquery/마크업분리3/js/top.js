$(function(){
     //notice
	$("#notice").css({"position" :"fixed","top" : "0", "left" : "0", "z-index" : "50", "width":"100%", "height" : "50px", "background-color" : "#666666", "line-height" : "50px","text-align":"center"});
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    $("#notice a").click(function(){
        $("#notice").slideUp(1000);      
    });
});