// ES6 - 대괄호[]에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성

let obj = {};
for(var i = 0; i < 4; i++){
    obj['key' + i] = i;
}
console.log(obj);

let profile = 'chloe:30';
let person = {
    [profile] : true,
    [profile.split(':')[0]]:profile.split(':')[1] 
};
console.log(person);