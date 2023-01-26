//ES6의 추가 된 화살표
const double = x => x + x; // x의 파라미터를 사용하면 x와 x를 더하는 함수
console.log(double(2)); // x와 x를 더한 값 함수 출력

const add = (a, b) => a + b;
console.log(add(1,2)); //1, 2 를 더해라
/*
const PrintArguments = () => {
    console.log(arguments);
}
PrintArguments(1,2,3);
*/
const sum = (...args) => {
    let total = 0;
    for(let i = 0; i<args.length; i++){
        total += args[i];
    }
    return total;
}
console.log(sum(1,2,3,4,5));


setTimeout(()=>{
    console.log('화살표 함수');
}, 3000);
