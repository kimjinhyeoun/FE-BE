//진수변환
const bin = 1000010011;  // binary - 2진수
const oct = 1023; //octal - 8진수
const hex = 213;  //hexpascal - 16진수

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(oct, 8);
const dexByHex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);

