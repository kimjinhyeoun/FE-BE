package ch05.sec11;

public class MainStringArrayArgumentFour {

	public static void main(String[] args) {
		if(args.length != 8) {
			System.out.println("프로그램 입력값이 부족");
			System.exit(0);
		}
		
		String strNum1 = args[0];
		String strNum2 = args[1];
		String strNum3 = args[2];
		String strNum4 = args[3];
		String strNum5 = args[4];
		String strNum6 = args[5];
		String strNum7 = args[6];
		String strNum8 = args[7];
		
		int num1 = Integer.parseInt(strNum1);
		int num2 = Integer.parseInt(strNum2);
		int num3 = Integer.parseInt(strNum3);
		int num4 = Integer.parseInt(strNum4);
		int num5 = Integer.parseInt(strNum5);
		int num6 = Integer.parseInt(strNum6);
		int num7 = Integer.parseInt(strNum7);
		int num8 = Integer.parseInt(strNum8);
		
		int result = num1 + num2;
		System.out.println(num1 + " + " + num2 + " = " + result);
		int result1 = num3 + num4;
		System.out.println(num3 + " + " + num4 + " = " + result1);
		int result2 = num5 + num6;
		System.out.println(num5 + " + " + num6 + " = " + result2);
		int result3 = num7 + num8;
		System.out.println(num7 + " + " + num8 + " = " + result3);
	}

}
