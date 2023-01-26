//ES6  - 새로운 자료형인 심볼형
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) == Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());