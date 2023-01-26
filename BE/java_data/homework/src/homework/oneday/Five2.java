package homework.oneday;

import java.util.Scanner;

public class Five2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("월 입력 : ");
		int month = sc.nextInt();
		
		switch(month) {
	 	case 12 :
			System.out.println(month + "월은 겨울 입니다!");
			break;
	 	case 1 :
	 		System.out.println(month + "월은 겨울입니다!");
	 		break;
	 	case 2 :
	 		System.out.println(month + "월은 겨울입니다!");
	 		break;
	 	case 3 :
	 	case 4 :
	 	case 5 :	
	 		System.out.println(month + "월은 봄입니다!");
	 		break;
	 	case 6 :
	 	case 7 :
	 	case 8 :
	 		System.out.println(month + "월은 여름입니다!");
	 		break;
	 	case 9 :
	 	case 10 :
	 	case 11 :
	 		System.out.println(month + "월은 가을입니다!");
	 		break;
	 	default ://if문에서 else와 같은 기능
	 		System.out.println("다시 입력해주세요");
		}
		sc.close();
	}

}
