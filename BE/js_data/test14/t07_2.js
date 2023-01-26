//자바스크립트 try 예외처리
function checkNumber(val){
    if(typeof val !== 'number') throw '숫자형이 아닙니다..';
    console.log('숫자형으로 확인되었습니다.' + val);
}
try {
    checkNumber(1);
} catch (e) {
    console.log(`에러가 발생했습니다. >> ${e}`);
}finally{
    console.log('에러가 나던 안나던 완료');
}