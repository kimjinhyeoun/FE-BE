package ewaweasd;

import java.util.Scanner;

public  class HotelOpen{
	 Scanner sc = new Scanner(System.in); //전역
	 static  boolean[] room = new boolean[5]; //5개 방
	 static  int num = 0; //전역변수

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Input b01 = new Input();
		Menu b02 = new Menu();
		PrintAll b03 = new PrintAll();
		Output b04 = new Output();
		MyExit b05 = new MyExit();
		Hotelguest b06 = new Hotelguest();
		
		System.out.println();
		

	    System.out.println("*** 호텔 예약관리시스템 ***");
	    int sel; //지역
	    b03.printAll(); //전체상태

	    while(true) {
	      try {
	    	  sel = b02.menu();

	        if(sel == 9) {
	        	b05.myExit();
	          break;
	        }

	        switch(sel) {
	          case 1 : 
	            b01.input();
	            b03.printAll();
	            break;

	          case 2 : 
	        	  b04.output();
	            b03.printAll();
	            break;

	          case 3 : 
	        	  b03.printAll();
	            break;
	            
	          case 4 : 
	        	  b06.gogag();
	        	  b03.printAll();
		            break;
	          default : 
	            System.out.println("1 ~ 3 사이의 메뉴를 입력하세요.");break;
	        }
	      }catch (Exception e) {}

	    }
	  }

	  

	  

	  

	  

	  

}


