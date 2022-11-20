package ch00.sec00;

import java.io.IOException;
import java.util.Scanner;

public class Ggs {

	public static void main(String[] args) throws IOException {
		Scanner scan = new Scanner(System.in);
		while(true) {
			System.out.print("몇 단 출력? ");
			int dan = scan.nextInt();
			if(!(dan==0 || (dan == 1))){
				System.out.println(dan+" 단 출력");
				for (int j = 1; j <= 9; j++) {
					System.out.print(dan + " x " + j + " = " + dan*j + "\n");
				}
			}
			else {
				System.out.println("종료");
				break;
			}
		}
	}
}
