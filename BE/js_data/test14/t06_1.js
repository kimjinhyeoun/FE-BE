//ES6 부터는 function 없이도 함수로 정의 할 수 있음.


//이전방식
var greeting_expression = function(name){
    console.log('Hi '+ name);
}
function greeting_declaration(name){
    console.log('Hi, '+name);
}

greeting_expression('Chole');
greeting_declaration('chloe');

