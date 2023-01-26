package ch06.sec00;

public class Calculation {
	
	//사용자정의함수

	public static void main(String[] args) {

		int result1 = 0;
		int result2 = 0;
		
		result1 = add(3, 5); //정의한 적없이 "내"가 만든 함수 add //Static Method는 객체의 생성 없이 호출이 가능
		result2 = add(5, 7);
		
		horiLine();
		System.out.println("두 수의 합 : " + result1);
		horiLine();
		System.out.println("두 수의 합 : " + result2);
		horiLine();
		myCalculation(10, 3, '/');
		horiLine();
		myCalculation(10, 3, '+');
		horiLine();
	}
	
	static void myCalculation (int a, int b, char c) {
		
		int result = 0;
		String gb = "";
		
		if (c == '+') {
			result = a + b;
			gb = "덧셈";
		}else if (c == '-') {
			result = a - b;
			gb = "뺄셈";
		}else if (c == '*') {
			result = a * b;
			gb = "곱셈";
		}else if (c == '/') {
			result = a / b;
			gb = "나눗셈";
		}
		
		System.out.println("두수의 " + gb + "은 " + result + " 입니다.");
		
//		int result = 0;
//		if (c == '+') {
//			System.out.println("두 수의 덧셈 : "+(a+b));	
//		}else if (c == '-') {
//			System.out.println("두 수의 뺄셈 : "+(a-b));	
//		}else if (c == '*') {
//			System.out.println("두 수의 곱셈 : "+(a*b));	
//		}else if (c == '/') {
//			System.out.println("두 수의 나눗셈 : "+(a/b));	
//		}
		
	}
	
	static int add (int a, int b) {
		
		int result = 0;
		
		result = a + b;
		
		return result; //위 result와 따로라서 같은 이름이어도 괜찮음 
	}
	static void horiLine() {
		System.out.println("===================");
	}
	
}
