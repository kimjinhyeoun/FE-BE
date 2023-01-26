package hmm2;

import java.util.Scanner;

public class HotelOpen {
	
	 Scanner sc = new Scanner(System.in); //전역
	  boolean[] room = new boolean[5]; //5개 방
	  int num = 0; //전역변수
	  

	public static void main(String[] args) {
		
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
	        	  guest.goGaeg();
	        	  guest.printAll();
		          break;
	          default : 
	            System.out.println("1 ~ 4 사이의 메뉴를 입력하세요.");break;
	        }
	      }catch (Exception e) {}

	    }
	  }

	  public int menu() { //메뉴
	    System.out.print("\n1.입실예약  2.퇴실  3.객실현황 4.고객 등록/관리  9.종료 : ");
	    int sel = Integer.parseInt(sc.nextLine());
	    return sel;
	  }

	  public void input() { //예약
	    System.out.print("호텔 예약번호 입력 >> ");
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


	  	//-------------------------고객관리
		public static void regi(Scanner g_sc, String[] name, int[] id, String[] dept, String[] ph) {
			int count = 0;
			boolean over = true;
			while(count<id.length) {
				System.out.print("예약번호 : ");
				id[count] = g_sc.nextInt();
		
				if(count == 0) {
					System.out.print("이름 : ");
					name[count] = g_sc.next();
					System.out.print("생년월일 : ");
					dept[count] = g_sc.next();
					System.out.print("전화번호 : ");
					ph[count] = g_sc.next();
					System.out.println("----------------------");
					count++;
				} else {
					for(int j=(count-1); j>=0; j--) {
						if(id[count] == id[j]) {
							System.out.println("[동일한 예약번호입니다. 다시 입력하세요.]");
							over = false;
							break;
						}
						over = true;
					}
					if(over) {
						System.out.print("이름  : ");
						name[count] = g_sc.next();
						System.out.print("생년월일 : ");
						dept[count] = g_sc.next();
						System.out.print("전화번호 : ");
						ph[count] = g_sc.next();
						System.out.println("----------------------");
						count++;
					}
							
				}
			}
		}

		public static void print(String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				System.out.println("예약번호 : " + id[i]);
				System.out.println("이름 : " + name[i]);
				System.out.println("생년월일 : " + dept[i]);
				System.out.println("전화번호 : " + ph[i]);
				System.out.println("----------------------");
			}
		}

		public static void search(int sid, String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				if(id[i] == sid) {
					System.out.println("예약번호 : " + id[i]);
					System.out.println("이름 : " + name[i]);
					System.out.println("생년월일 : " + dept[i]);
					System.out.println("전화번호 : " + ph[i]);
					System.out.println("----------------------");
					break;
				} else if(i == (id.length-1)){
					System.out.println("[일치하는 예약번호가 없습니다.]");
				}
			}
		}

		public static void modify(Scanner g_sc, int sid, String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				if(id[i] == sid) {
					System.out.println("예약번호 : " + id[i]);
					System.out.println("이름 : " + name[i]);
					System.out.print("생년월일 입력 : ");
					dept[i] = g_sc.next();
					System.out.print("전화번호 입력 : ");
					ph[i] = g_sc.next();
					System.out.println("----------------------");
					break;
				} else if(i == (id.length-1)){
					System.out.println("[일치하는 예약번호가 없습니다.]");
				}
			}
		}

		public void goGaeg() {
			Scanner g_sc = new Scanner(System.in);
			
			System.out.print("고객의 수를 입력하세요 : ");
		
			int[] id = new int[g_sc.nextInt()];
			String[] name = new String[id.length];
			String[] dept = new String[id.length];
			String[] ph = new String[id.length];
			
			while(true) {
				System.out.println("------------------------");
				System.out.println("1. 정보 등록");
				System.out.println("2. 전체 조회");
				System.out.println("3. 개별 조회");
				System.out.println("4. 정보 수정");
				System.out.println("5. 이전으로 돌아가기");
				
				System.out.print("예약번호를 입력하세요. : ");
				int num = g_sc.nextInt();
				System.out.println("------------------------");
				
				if(num > 5 || num < 0) {
					System.out.println("[잘못된 예약번호 입니다. 다시 입력하세요.]");
				} else {
					switch (num) {
					case 1:
						System.out.println("[고객으로 등록합니다.]");
						regi(g_sc, name, id, dept, ph);
						break;
						
					case 2:
						System.out.println("====== 전체 고객 출력 ======");
						print(name, id, dept, ph);
						break;
						
					case 3:
						System.out.println("[고객을 조회 합니다.]");
						System.out.print("예약번호를 입력하세요. : ");
						search(g_sc.nextInt(), name, id, dept, ph);
						break;
						
					case 4:
						System.out.println("[고객 정보를 수정합니다.]");
						System.out.print("예약번호를  입력하세요. : ");
						modify(g_sc, g_sc.nextInt(), name, id, dept, ph);
						break;
		
					default:
						System.out.println("*** 호텔 예약관리시스템 ***");
						return;
					}
				}
			}
		}
}
