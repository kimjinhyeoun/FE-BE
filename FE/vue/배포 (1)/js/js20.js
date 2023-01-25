$(document).ready(function(){

    ​
    
        var w = 250*$(".food li").length;    
    
        $(".food").css("width", w);
    
        $(".food li:last").prependTo(".food");  
    
        $(".food").css("margin-left",-250+"px");  
    
        
    
        $(".prev").click(function(){ 
    
            $(".food:not(:animated)")
    
                .animate({ marginLeft : parseInt($(".food").css("margin-left"))-250+"px"} , "linear", function(){
    
                    $(".food li:first").appendTo(".food");     
    
                    $(".food").css("margin-left",-250+"px");
    
            });
    
        });
    
    ​
    
        $(".next").click(function(){ 
    
              $(".food:not(:animated)")
    
                .animate({ marginLeft : parseInt($(".food").css("margin-left"))+250+"px"}, "linear", function(){
    
                    $(".food li:last").prependTo(".food");  
    
                    $(".food").css("margin-left",-250+"px");
    
            });      
    
        });
    
        
    
    });