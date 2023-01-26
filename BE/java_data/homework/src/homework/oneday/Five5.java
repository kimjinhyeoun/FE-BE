package homework.oneday;

import java.util.Scanner;

public class Five5 {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);

        System.out.printf("첫 번째 숫자 : ");
        int num1 = sc.nextInt();
        
        System.out.printf("두 번째 숫자 : ");
        int num2 = sc.nextInt();
        
        if ((num1 < 1) || (num2 < 1)) {
            System.out.println("1이상의 숫자만을 입력해주세요.");
        } else {
            int min = Math.min(num1, num2);
            int max = Math.max(num1, num2);
            
            for (int i = min; i <= max; i++) {
                System.out.print(i + " ");
            }
            
            return;
        }
	}
}

