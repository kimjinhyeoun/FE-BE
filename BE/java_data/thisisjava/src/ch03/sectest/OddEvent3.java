package ch03.sectest;

import java.util.Scanner;

public class OddEvent3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
	
		while(true){
			
		System.out.println("한개의데이터 입력 : ");
		
        String xx = scanner.nextLine();
        char x = xx.charAt(0);

	        if(x >='0'&& x <='9'){
	        	System.out.println("숫자입니다.");
	        }else if(x >='A' && x <='Z'){
	        	System.out.println("영어 대문자.");
	        }else if(x >='a' && x <='z'){
	        	System.out.println("영어 소문자");
	        }else {
	        	System.out.println("영문 숫자 아닙니다.");
	        }
	        if(x == 'Q') {
	        	System.out.println("프로그램 종료");
	        	break;
	        }
	        scanner.close();
		}
	}
}
