package homework.oneday;

import java.util.Scanner;

public class Two2 {

	public static void main(String[] args) throws Exception {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("숫자입력 : ");
		String strX = scanner.nextLine();
		int x = Integer.parseInt(strX);
		
		int result = x + 100;
		int result2 = x * 100;
		System.out.println("입력한 정수값 + 100 : " + result);
		System.out.println("입력한 정수값 x 100 : " + result2);
		scanner.close();
	}

}
