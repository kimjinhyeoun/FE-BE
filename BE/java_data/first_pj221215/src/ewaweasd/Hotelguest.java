package ewaweasd;

import java.util.Scanner;

public class Hotelguest extends HotelOpen{
	
	
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

		public static void modify(Scanner sc, int sid, String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				if(id[i] == sid) {
					System.out.println("예약번호 : " + id[i]);
					System.out.println("이름 : " + name[i]);
					System.out.print("생년월일 입력 : ");
					dept[i] = sc.next();
					System.out.print("전화번호 입력 : ");
					ph[i] = sc.next();
					System.out.println("----------------------");
					break;
				} else if(i == (id.length-1)){
					System.out.println("[일치하는 예약번호가 없습니다.]");
				}
			}
		}

		public static void end(Scanner g_sc) {
			System.exit(0);
			g_sc.close();
		}

		public  void gogag() {
			Scanner g_sc = new Scanner(System.in);
			
			System.out.print("고객의 수를 입력하세요 : ");

			int[] id = new int[g_sc.nextInt()];
			String[] name = new String[id.length];
			String[] dept = new String[id.length];
			String[] ph = new String[id.length];
			
			while(true) {
				System.out.println("****** 호텔 고객 정보 관리 프로그램 ******");
				System.out.println("1. 정보 등록");
				System.out.println("2. 전체 조회");
				System.out.println("3. 개별 조회");
				System.out.println("4. 정보 수정");
				System.out.println("5. 프로그램 종료");
				
				System.out.print("예약번호를 입력하세요. : ");
				int num = g_sc.nextInt();
				System.out.println("----------------------");
				
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
