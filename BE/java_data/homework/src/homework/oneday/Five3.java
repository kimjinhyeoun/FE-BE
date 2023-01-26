package homework.oneday;

import java.util.Scanner;

public class Five3 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int i;
		while(true){
			System.out.printf("숫자를 입력하세요 : ");
			i = sc.nextInt();
			if (i >=100 && i <=999){
				System.out.printf("입력한 숫자 : %2d \n", i);
				System.out.println("종료합니다.");
				break;
			}else {
				System.out.println("100~999 입력시 종료");
			}
			sc.close();
		}
	}
}
