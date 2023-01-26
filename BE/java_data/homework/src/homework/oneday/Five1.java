package homework.oneday;

import java.util.Scanner;

public class Five1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);  // Scanner 객체 생성
		int comNum = (int) (Math.random() * 3) + 1;  // 1 ~ 3 사이의 난수 발생

		System.out.print("1가위, 2바위, 3보 입력: ");
		int myNum = scanner.nextInt();  // int형 사용자값 입력 받기

		System.out.print("컴퓨터가 ");
		if (comNum == 1) {
			System.out.print("가위");
		} else if (comNum == 2) {
			System.out.print("바위");			
		} else {
			System.out.print("보");
		}
		System.out.println("를 냈습니다.");		
		
		
		System.out.print("사용자가 ");
		
		if (myNum == 1) {
			System.out.print("가위");
		} else if (myNum == 2) {
			System.out.print("바위");			
		} else {
			System.out.print("보");
		}	
		System.out.println("를 냈습니다.");		

		if (comNum == myNum) { // 컴퓨터와 사용자가 값은 값을 냈다면,
			System.out.println("비겼습니다.");				
		} else if ((comNum == 1 && myNum == 2) || (comNum == 2 && myNum == 3) || (comNum == 3 && myNum == 1)) {
			System.out.println("이겼습니다.");
		} else {
			System.out.println("졌습니다.");			
		}
		scanner.close();
	}
}
