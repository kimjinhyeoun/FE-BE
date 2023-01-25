        // 1번문제 10,9,8,7,6,5,4 출력 while문으로 구현
        var i=10;
        while(i>=4){
        document.write(i+"<br>");
        i--;
        }document.write("<hr>")


        //2번문제 7,6,5,4,3,2,1 do~while문으로 구현
        var j=7;
        do{
        document.write(j +" ");
        j--;
        }while(j>=1);
        document.write("<hr>")

        // 3번 1~20까지의 홀수의 누적합 100 while문으로 구현하시오
        var hap1 = 0;
        var k=1;
        while(k<=20){
            hap1+=k
            k+=2;
        }
        document.write("1~20까지의 홀수의 누적합 : "+hap1);
        document.write("<hr>")


        // 4번 1~20까지의 홀수의 누적합 100 do~while문으로 구현하시오
        var hap2 = 0;
        var x=1;
        do{  
            hap2+=x
            x+=2;
        }while(x<=20)
        document.write("1~20까지의 홀수의 누적합 : "+hap1);
        document.write("<hr>")


        //5번 입력받은 값이 홀수이고, 남자이면 'num1.gif'출력, 입력받은 값이 짝수이고 여자이면 'num2.gif' 출력
        //해당사항이 없으면 '다시입력하세요' 출력 (if문으로)
        var girl = "여자"
        var man = "남자"
        var num1, num2
        num1 = prompt("성별을 입력하세요.");
        num2 = Number(prompt("숫자를 입력하세요."));
        
         if(num1 == girl){
            if(num2 % 2 == 0){
                document.write("<img src='image/num1.gif' width='40' height='40'>");
            }
             }if(num1 == man){
                    if(num2 % 2 == 1 ){
                        document.write("<img src='image/num2.gif' width='40' height='40'>");
                    }
             }if(num1 == girl != num2 % 2 == 0){
                if(num1 == man != num2 % 2 == 1){
                document.write("다시 입력하세요");
                }
             }