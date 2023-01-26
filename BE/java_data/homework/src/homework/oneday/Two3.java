package homework.oneday;

import java.util.Scanner;

public class Two3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("실수1 : ");
        double x = scanner.nextDouble();
        
        System.out.println("실수2 : ");
        double y = scanner.nextDouble();
		
        double result = (x + y) / (double)2; 
        System.out.println("실수1+실수2 평균값 : "+result);
        scanner.close();
	}

}
