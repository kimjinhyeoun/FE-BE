package ch03.sectest;

import java.util.Scanner;

public class OddEvent6 {

	public static void main(String[] args) {
			Scanner scanner = new Scanner(System.in);
			
			int sum = 0;
			
			while(true){
			System.out.println("한개의데이터 입력 : ");	
			
	        String xx = scanner.nextLine();
	        int i = Integer.parseInt(xx);
	        
	        sum += i;
	        System.out.println("현재값은 : "+sum+"입니다.");
	        
	        if(sum >=30) {
	        	System.out.println("총합: "+ sum +"입니다.");
	        break;
	        }
		}
	}
}
