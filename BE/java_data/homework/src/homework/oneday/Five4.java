package homework.oneday;

import java.util.Scanner;

public class Five4 {
	public static void main (String[] args) {
		int com = 0, user = 0, count = 0;
		
		com = (int)(Math.random()*100);
		Scanner sc = new Scanner(System.in);
		for(;;) {
			System.out.printf("숫자입력 : ");
			user = sc.nextInt();
			
			if(user < 1 || user > 100) {
				System.out.println("잘못된입력입니다.");
				continue;
			}
			count++;
			if(com>user) {
				System.out.println("UP");
			} else if(com < user){
				System.out.println("DOWN");
			} else {
				System.out.println("정답. 입력횟수 :" + count);
				break;
			}
			sc.close();
		}
    }
}
