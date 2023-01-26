package ewaweasd;

public class Input extends HotelOpen{
	public void input() { //입실예약
        System.out.print("호텔 예약번호 입력 >> ");
        num = Integer.parseInt(sc.nextLine());
        if(num < 1 || num > 5) { //num 1~5 사이가 아닐 시
            System.out.println(num + "번호를 사용할 수 없습니다.");
        }else if(room[num-1] == true){ // 입력받은 값이 이미 true 값이면 (boolean = 0 : false , 1 : true)
            System.out.println("room [" + num + "] 예약되어있는 객실입니다.");
        }else{// 입력받은 값이 false 값이면 예약 성공
            System.out.println("room[" + num + "] 객실 예약 성공");
            room[num-1] = true;
        }
        return;
    }
}
