package ch03.sec11;

import java.util.Scanner;

public class OddEven {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("숫자 : ");
        int x = scanner.nextInt();

        String result =(x%2 == 0) ? "짝수" : "홀수";
        System.out.println(result +" 입니다.");
        
        scanner.close();
	}

}
