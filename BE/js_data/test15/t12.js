//정규표현식
//Map
const map = new Map();

map.set('one', 1);
map.set(2, 'two');
map.set([1, 2, 3], 'Three elements');
map.set({a: 'A', b: 'B'}, 'object elements');
map.set(function() {}, 'function element');

console.log(map.size); // 맵 5개확인

