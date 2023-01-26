package hmm;

import java.util.Scanner;

public class HotelOpen {
	
	 Scanner sc = new Scanner(System.in); //전역
	  boolean[] room = new boolean[5]; //5개 방
	  int num = 0; //전역변수

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		
		HotelOpen guest = new HotelOpen();

	    System.out.println("*** 호텔 예약관리시스템 ***");
	    int sel = 9; //지역
	    guest.printAll(); //전체상태

	    while(true) {
	      try {
	        sel = guest.menu();

	        if(sel == 9) {
	          myExit();
	          break;
	        }

	        switch(sel) {
	          case 1 : 
	            guest.input();
	            guest.printAll();
	            break;

	          case 2 : 
	            guest.output();
	            guest.printAll();
	            break;

	          case 3 : 
	            guest.printAll();
	            break;
	            
	          case 4 : 
	        	  	Hotelguest.main(args);
		            break;
	          default : 
	            System.out.println("1 ~ 3 사이의 메뉴를 입력하세요.");break;
	        }
	      }catch (Exception e) {}

	    }
	  }

	  public int menu() { //메뉴
	    System.out.print("\n1.입실예약  2.퇴실  3.객실현황 4.a  9.종료 : ");
	    int sel = Integer.parseInt(sc.nextLine());
	    return sel;
	  }

	  public void input() { //예약
	    System.out.print("호텔 객실번호 입력 >> ");
	    num = Integer.parseInt(sc.nextLine());
	    if(num < 1 || num > 5) {
	      System.out.println(num + "번호를 사용할 수 없습니다.");
	    }else if(room[num-1] == true){
	    	System.out.println("room [" + num + "] 예약되어있는 객실입니다.");
	    }else{
	    	System.out.println("room[" + num + "] 객실 예약 성공");
		    room[num-1] = true;
	    }
	  }

	  public void output() { //퇴실
	    System.out.print("퇴실 방 번호 입력 >>");
	    num = Integer.parseInt(sc.nextLine());
	    if(room[num-1] == true) {
	      System.out.println("room [" + num + "] 객실 퇴실 하였습니다.");
	      room[num-1]=false; 
	    }else {
	      System.out.println("room [" + num + "] 비어있는 객실입니다.");
	    }
	  }

	  public void printAll() { //객실현황
	    for(int i=0; i<room.length; i++) {
	      if(room[i] == true) {
	        System.out.println("  " + (i+1) + "번째 ■ 호텔 객실 사용중입니다.");
	      }else {
	        System.out.println("  " + (i+1) + "번째 □ 호텔 객실 비어있습니다.");
	      }
	    }
	  }

	  public static void myExit() {
	    System.out.println("\n호텔 예약 프로그램을 종료합니다.");
	    System.exit(1);
	}

}
