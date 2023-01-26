package homework.oneday;

import java.util.Scanner;

public class Three3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("점수입력 : ");
		String strX = scanner.nextLine();
		int x = Integer.parseInt(strX);
		
		if(x >= 101) {
			System.out.println("100보다 큽니다 다시 입력");
		}
		else if(x >= 90 || x == 100) {
			System.out.println("\'A\'학점 입니다");
		}
		else if(x >= 80 || x == 89) {
			System.out.println("\'B\'학점 입니다");
		}
		else if(x >= 70 || x == 79) {
			System.out.println("\'C\'학점 입니다");
		}
		else if(x >= 60 || x == 69) {
			System.out.println("\'D\'학점 입니다");
		}
		else {
			System.out.println("\'F\'학점 입니다");
		}
	}

}
