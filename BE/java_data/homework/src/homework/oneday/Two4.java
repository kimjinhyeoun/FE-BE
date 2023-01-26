package homework.oneday;

import java.util.Scanner;

public class Two4 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("가로 : ");
        int x = scanner.nextInt();
        
        System.out.println("세로 : ");
        int y = scanner.nextInt();
		
        long result = (long)x * y;
        System.out.println("넓이 : "+(long)result);
        scanner.close();
	}

}
