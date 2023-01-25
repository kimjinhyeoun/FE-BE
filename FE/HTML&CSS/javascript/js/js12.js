//수강신청은 하셨나요
function ok(){
    alert("그렇군요");
}
function no(){
    alert("네?");
}
//좋아하는 과목은 무엇입니까
function list1(i){
    if(i=='웹표준'){
        alert('웹표준 입니다.');
    }
    else if(i=='html5'){
        alert('html5 입니다.');
    }
    else{
        alert('javascript 입니다.')
    }
}
//우리나라 수도는 어디인가요
function q(){
    var ans = document.getElementById("ans_r").value;
    if(ans==""){ //"" 여기에 아무것도 안적혀있으면 비어있는걸 표현하는거
        alert('내용을 입력해주세요.');
        document.getElementById("ans_r").focus(); //커서 깜빢깜빢쓰
        document.getElementById("ans_r").style = "outline:none";
    }
    else if(ans=='a' || ans == 'A' || ans == '서울'){
        alert("정답입니다.");
    }
    else{
        alert("틀렸습니다 다시 입력해주세요.")
        document.getElementById("ans_r").value = "";
        document.getElementById("ans_r").focus();
        document.getElementById("ans_r").style = "outline:none";
    }
}