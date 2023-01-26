// 자료형 이해

var item = {
    privce: 500,
    count : 10
}; //객체 (Object)

var fruits = ['apple','orange','kiwi']; //배열
var addFruit = function(fruit){
    fruits.push(fruit);
}//함수 (function)
addFruit('watermelon');
console.log(fruits);