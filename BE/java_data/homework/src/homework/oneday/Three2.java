package homework.oneday;

import java.util.Scanner;

public class Three2 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("숫자입력 : ");
        int x = scanner.nextInt();
        
        if(x > 0) {
        	System.out.println("양수 : " + x );
        }else if(x < 0) {
        	System.out.println("음수 : " + x);
        }else {
        	System.out.println("입력한 값은 0 입니다.");
        }
        scanner.close();
	}
}
