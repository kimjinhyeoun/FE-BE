package ch03.sectest;

public class OddEvent4 {

	public static void main(String[] args) {
		
		int jumsu = 4;
		char result;
		int grade = jumsu/10;
		
		switch(grade) {
		case 9:
			result ='A';
			break;
		case 8:
			result ='B';
			break;
		case 7:
			result ='C';
			break;
		case 6:
			result ='D';
			break;
		case 5:
			result ='E';
			break;
		default:
			result ='F';
		}
		System.out.println("당신의 학점은 :" + result+"입니다.");
	}
}
