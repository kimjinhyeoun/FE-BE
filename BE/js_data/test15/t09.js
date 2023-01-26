// 자리올림 - ceil 메소드는 소수점 기준으로 올림
const positiveNum = 93.54;
const negativeNum = 39.27;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(negativeNum));
console.log(Math.ceil(positiveNum * 10) / 10);
console.log(Math.ceil(positiveNum * 10) * 10);
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum * 10) * 10);

console.log('-----------------------------------------------');

// 자리내림 - floor 메소드는 소수점 기준으로 내림

console.log(Math.floor(positiveNum));
console.log(Math.floor(negativeNum));
console.log(Math.floor(positiveNum * 10) / 10);
console.log(Math.floor(positiveNum * 10) * 10);
console.log(Math.floor(negativeNum * 10) / 10);
console.log(Math.floor(negativeNum * 10) * 10);
