package homework.oneday;

import java.util.Scanner;

public class Eight4 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.printf("10진수 입력: ");
		int i = scanner.nextInt();
		
		String str1 = Integer.toBinaryString(i);
		String str2 = Integer.toOctalString(i);
		String str3 = Integer.toHexString(i);
		
		System.out.println(i+"의 2진수 : " + str1);
		System.out.println(i+"의 8진수 : " + str2);
		System.out.println(i+"의 16진수 : " + str3);   
	}
}
