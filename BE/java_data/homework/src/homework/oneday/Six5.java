package homework.oneday;

import java.util.Scanner;

public class Six5 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("정수 입력 : ");
		int n1 = sc.nextInt();
		System.out.print("배수 입력 : ");
		int n2 = sc.nextInt();
		
		for(int i = 1; i <= n1; i++) {
			if(i % n2 != 0) {
				continue;
			}
			System.out.println(i + " ");
		}
	}
}
