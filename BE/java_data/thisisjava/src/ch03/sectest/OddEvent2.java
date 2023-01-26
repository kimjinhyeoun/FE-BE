package ch03.sectest;

import java.util.Scanner;

public class OddEvent2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("값입력:");
		String strX = scanner.nextLine();
		int x = Integer.parseInt(strX);
		
		if(x%2 == 0) {
			System.out.println("짝수입니다.");
		}else {
			System.out.println("홀수");
		}
		scanner.close();
	}
	
}
