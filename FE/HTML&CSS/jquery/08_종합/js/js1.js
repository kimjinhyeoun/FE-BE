$(document).ready(function(){
    $(".popup").click(function(){
        var href1 = $(this).attr("href");
        window.open(href1, "그래픽","width=400px, height=500px, left=800px, top=200px");
        return false;
    });
});