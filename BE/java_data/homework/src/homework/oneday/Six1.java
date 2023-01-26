package homework.oneday;

import java.util.Scanner;

public class Six1 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("1 : +, 2 : *, 3 : +* 선택.");
		System.out.print("종류 : ");
		int n  = sc.nextInt();
		System.out.print("반복 : ");
		int c = sc.nextInt();
				
		System.out.print("출력 : ");
		
		for(int i = 0; i < c; i++) {
			if (n == 1) {
				System.out.print("+");
			}else if (n == 2) {
				System.out.print("*");
			}else if (n == 3) {
				System.out.print("+*");
			}
		}
	}
}
