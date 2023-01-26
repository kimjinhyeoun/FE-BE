//복잡하게 하지말고 그냥 배열 정렬하자
//배열 거꾸로 정렬
const str = 'abcdefghijklmnopqrstuvwxyz'; //뭔가 정렬을 하려면 하나하나 토막을 내야해 그래서 분리시켜야지?
const arr = str.split(''); //split 분리하라는 뜻 그래서 한글자씩 분리
arr.reverse();  //거꾸로 돌렸다. 역으로 정렬.

console.log(arr.join(''));  //야 다시 합쳐. 전체로 합쳤다.