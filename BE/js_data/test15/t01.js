//호이스팅 아래에 함수가 있어 원래는 에러인데 호이스팅때문에 끌어올려 호출이 가능함
hello();

function hello(){
    console.log("안녕하세요");
}
