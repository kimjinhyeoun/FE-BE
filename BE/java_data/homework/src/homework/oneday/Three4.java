package homework.oneday;

import java.util.Scanner;

public class Three4 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		double x, y;
		
		System.out.print("숫자1 : ");
		x = scanner.nextDouble();
		System.out.print("숫자2 : ");
		y = scanner.nextDouble();
		
		if(x%1== 0 && y%1== 0) {
			System.out.println(true);
		}
		else{
			System.out.println(false);
		}
	}

}
