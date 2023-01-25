$(document).ready(function(){
    //[name]
    // $("#txt p[class]")
    //     .css("border","2px dotted #cc0033");

    //[name='value']
    //아이디와 타이틀 둘 다 있는태그 적용
    // $("#link1 a[id][title]") 
    //     .css("border","2px dotted #cc0033");
    // $("#link1 a[target='_blank']") //타겟 블랭크인애들 적용
    //     .css("border","2px solid #cc0033");


    //[name^='value']
    //밸류속성값이 시작하거나 일치하는 셀렉터
    // $("#link1 a[href^='http']")
    //     .css("border","2px solid #cc0033");

    //[name$="value"]
    //밸류속성값이 끝에있거나 일치하는 셀렉터
    // $("#txt p[class$='css1']")
    //      .css("border","2px solid #cc0033");


    //[name*="value"]
    //밸류 속성값애 n이 포함되거나 일치하는셀렉터
    // $("#link1 a[target*='n']") 
    //     .css("border","2px solid #cc0033");
    

    //[name!="value"]
    //밸류와 일치하지 않은 셀렉터
    //img3.gif 뺴고 나머지를 말함
    // $("#gallery img[src!='images/img3.gif']")
    //     .css("border","2px solid #cc0033");.
    
 
    //[name|="value"]
    //밸류에 하이픈이있으며 밸류로 시작하거나 일치하는셀렉터
    //id중에 thml1에 하이픈이 있는 애들을 말함
    // $("#txt p[id|='html1']")
    //      .css("border","2px solid #cc0033");


    //[name~="value"]
    //밸류에 공백(띄어쓰기)이 있거나 그 중하나이거나 일치하는 셀렉터
    //class중에 공백(띄어쓰기)도 있고 css1을 일치하는 애들
    $("#txt p[class~='css1']")
          .css("border","2px solid #cc0033");


});