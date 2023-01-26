//삼항 연산자
let condition = 5 > 10;
condition ? console.log('참') : console.log("거짓");

let result = condition ? (
    console.log('삼항 연산자 첫번째 표현식'),
    "표현식1"
):(
    console.log('삼항 연산자 두번째 표현식'),
    "표현식2"
);
console.log(result);