package homework.oneday;

import java.util.Scanner;

public class Seven1 {

	public static void main(String[] args) {
				Scanner scanner = new Scanner(System.in);
				
				System.out.println("BMI 계산기");		
				
				// 몸무게 입력을 받는 문구 출력
				System.out.print("몸무게를 입력하시오. ");
				
				// String 변수 weight을 선언하고 입력받은 값을 저장 (몸무게)
				String weight = scanner.nextLine();
				
				// 키(신장)의 입력을 받는 문구 출력
				System.out.print("키를 입력하시오. ");
				
				// String 변수 height을 선언하고 입력받은 값을 저장 (키)
				String height = scanner.nextLine();
				
		// String -> double
				
				// 입력받은 값(weight)의 타입(String)을 double 타입으로 변환한다.
				double w = Double.parseDouble(weight);
				
				// 입력받은 값(height)의 타입(String)을 double 타입으로 변환한다.
				double h = Double.parseDouble(height);
				
				// bmi 계산을 위해 입력받은 신장을 미터(m)단위로 바꿔준다.
				h /= 100;
				
		//BMI 공식을 이용하여 지수를 계산한다.(* / 를 이용)
				
				// BMI수치를 계산하고 double타입 변수로 저장한다.
				double bmi = w / (h * h);
				
				bmi = (int)(bmi*100)/100.0;
		// 저체중 20미만 // 정상 20.00 ~ 24.00 // 과체중 24.01 ~ 29.00 // 비만 29.01 ~
				// 만약 bmi가 20보다 작다면
				if(bmi < 20) {
					// 입력한 키, 몸무게의 값을 출력
					System.out.println("키 = " + height + "cm /" + " 몸무게 = " + weight + "kg");
					// 계산된 bmi 와 판정을 출력
				    System.out.println("나의 BMI = " + bmi + " / 판정 = 저체중 입니다.");
				}
				
				// 만약 bmi가 24보다 작거나 같으면
				else if(bmi <= 24) {
					// 입력한 키, 몸무게의 값을 출력
					System.out.println("키 = " + height + "cm /" + " 몸무게 = " + weight + "kg");
					// 계산된 bmi 와 판정을 출력
				    System.out.println("나의 BMI = " + bmi + " / 판정 = 정상 입니다.");
				}
				
				// 만약 bmi가 29보다 작거나 같으면
				else if(bmi <= 29) {
					// 입력한 키, 몸무게의 값을 출력
					System.out.println("키 = " + height + "cm /" + " 몸무게 = " + weight + "kg");
					// 계산된 bmi 와 판정을 출력
				    System.out.println("나의 BMI = " + bmi + " / 판정 = 과체중 입니다.");
				}
				
				// bmi가 30보다 크다면
			    else {
			    	// 입력한 키, 몸무게의 값을 출력
					System.out.println("키 = " + height +  "cm /" + " 몸무게 = " + weight + "kg");
					// 계산된 bmi 와 판정을 출력
			        System.out.println("나의 BMI = " + bmi + " / 판정 = 비만 입니다.");
			    }
				scanner.close();
	}

}
