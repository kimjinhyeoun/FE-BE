//t06에서 join 쓴 김에
//객체를 병합하고 확장하는 방법 - assign

const obj1 = {one: 1, two: 2, three: 3};
const obj2 = {name: '탄이', age: 5, address: 'Seoul'};
const obj3 = {friends: ['혜림', '현아', '현일', '우림']};

const newObj1 = Object.assign({}, obj1); 
const newObj2 = Object.assign({}, obj1, obj2); //obj1과 obj2를 합치라는뜻
newObj1.four = 4; //추가하라는 뜻

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n'); //이스케이프 문자(줄바꿈)

const newObj3 = Object.assign(obj1, obj3);//obj1과 obj3를 합치라는뜻

console.log(obj1); //출력결과 : { one: 1, two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }
console.log(newObj1); //출력결과 : { one: 1, two: 2, three: 3, four: 4 }
console.log(newObj2); //출력결과 : { one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul' }
console.log(newObj3); //출력결과 : { one: 1, two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }
// 근데 출력결과를 보면 obj1 이랑 newObj3이랑 출력결과가 같다 이게 문제점이다 assign의. obj3가 obj1에게 엎어치기당해서 그렇다.