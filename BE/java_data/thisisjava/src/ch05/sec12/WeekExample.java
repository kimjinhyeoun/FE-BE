package ch05.sec12;

import java.util.Calendar;

public class WeekExample {

	public static void main(String[] args) {
		//Week 열거 타입 변수 선언
		Week today = null;
		
		//Calendar 얻기
		Calendar cal = Calendar.getInstance(); //컴퓨터 날짜 및 시간 정보를 가진 캘린더 객체를 얻고 번지를 CAL 변수에 대입. Calendar 얻기
		
		//오늘의 요일 얻기 (1~7)
		int week = cal.get(Calendar.DAY_OF_WEEK);
		System.out.println("week = " + week);
		
		//숫자를 열거 상수로 변환해서 변수에 대입
		switch(week) {
		case 1 : today = Week.SUNDAY;
			break;
		case 2 : today = Week.MONDAY;
			break;
		case 3 : today = Week.TUESDAY;
			break;
		case 4 : today = Week.WEDNESDAY;
			break;
		case 5 : today = Week.THURSDAY;
			break;
		case 6 : today = Week.FRIDAY;
			break;
		case 7 : today = Week.SATURDAY;
			break;
		}
		
		//열거 타입 변수를 사용
		if(today == Week.FRIDAY) {
			System.out.println("금요일에는 술을 마십니다.");
		}
		else{
			System.out.println("열심히 자바를 공부합니다.");
		}
	}

}
