package ch03.sectest;

import java.util.Scanner;

public class OddEvent1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
	
		while(true){
			
		System.out.println("한개의데이터 입력 : ");
				
        String xx = scanner.nextLine();
        char x = xx.charAt(0);       
        
        if(x >='0'&& x <='9'){
        	System.out.println("숫자입니다.");
        }else {
        	System.out.println("숫자가 아닙니다.");
        }
        if(x == 'q' || x == 'Q') {
        	System.out.println("프로그램 종료");
        	break;
        
        
        }
        
		}
		
		scanner.close();
		
	}

}
