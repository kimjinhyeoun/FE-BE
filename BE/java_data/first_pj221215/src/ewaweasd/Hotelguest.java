package ewaweasd;

import java.util.Scanner;

public class Hotelguest extends HotelOpen{
	
	
		public static void regi(Scanner g_sc, String[] name, int[] id, String[] dept, String[] ph) {
			int count = 0;
			boolean over = true;
			while(count<id.length) {
				System.out.print("�����ȣ : ");
				id[count] = g_sc.nextInt();

				if(count == 0) {
					System.out.print("�̸� : ");
					name[count] = g_sc.next();
					System.out.print("������� : ");
					dept[count] = g_sc.next();
					System.out.print("��ȭ��ȣ : ");
					ph[count] = g_sc.next();
					System.out.println("----------------------");
					count++;
				} else {
					for(int j=(count-1); j>=0; j--) {
						if(id[count] == id[j]) {
							System.out.println("[������ �����ȣ�Դϴ�. �ٽ� �Է��ϼ���.]");
							over = false;
							break;
						}
						over = true;
					}
					if(over) {
						System.out.print("�̸�  : ");
						name[count] = g_sc.next();
						System.out.print("������� : ");
						dept[count] = g_sc.next();
						System.out.print("��ȭ��ȣ : ");
						ph[count] = g_sc.next();
						System.out.println("----------------------");
						count++;
					}
							
				}
			}
		}

		public static void print(String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				System.out.println("�����ȣ : " + id[i]);
				System.out.println("�̸� : " + name[i]);
				System.out.println("������� : " + dept[i]);
				System.out.println("��ȭ��ȣ : " + ph[i]);
				System.out.println("----------------------");
			}
		}

		public static void search(int sid, String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				if(id[i] == sid) {
					System.out.println("�����ȣ : " + id[i]);
					System.out.println("�̸� : " + name[i]);
					System.out.println("������� : " + dept[i]);
					System.out.println("��ȭ��ȣ : " + ph[i]);
					System.out.println("----------------------");
					break;
				} else if(i == (id.length-1)){
					System.out.println("[��ġ�ϴ� �����ȣ�� �����ϴ�.]");
				}
			}
		}

		public static void modify(Scanner sc, int sid, String[] name, int[] id, String[] dept, String[] ph) {
			for(int i=0; i<id.length; i++) {
				if(id[i] == sid) {
					System.out.println("�����ȣ : " + id[i]);
					System.out.println("�̸� : " + name[i]);
					System.out.print("������� �Է� : ");
					dept[i] = sc.next();
					System.out.print("��ȭ��ȣ �Է� : ");
					ph[i] = sc.next();
					System.out.println("----------------------");
					break;
				} else if(i == (id.length-1)){
					System.out.println("[��ġ�ϴ� �����ȣ�� �����ϴ�.]");
				}
			}
		}

		public static void end(Scanner g_sc) {
			System.exit(0);
			g_sc.close();
		}

		public  void gogag() {
			Scanner g_sc = new Scanner(System.in);
			
			System.out.print("���� ���� �Է��ϼ��� : ");

			int[] id = new int[g_sc.nextInt()];
			String[] name = new String[id.length];
			String[] dept = new String[id.length];
			String[] ph = new String[id.length];
			
			while(true) {
				System.out.println("****** ȣ�� �� ���� ���� ���α׷� ******");
				System.out.println("1. ���� ���");
				System.out.println("2. ��ü ��ȸ");
				System.out.println("3. ���� ��ȸ");
				System.out.println("4. ���� ����");
				System.out.println("5. ���α׷� ����");
				
				System.out.print("�����ȣ�� �Է��ϼ���. : ");
				int num = g_sc.nextInt();
				System.out.println("----------------------");
				
				if(num > 5 || num < 0) {
					System.out.println("[�߸��� �����ȣ �Դϴ�. �ٽ� �Է��ϼ���.]");
				} else {
					switch (num) {
					case 1:
						System.out.println("[������ ����մϴ�.]");
						regi(g_sc, name, id, dept, ph);
						break;
						
					case 2:
						System.out.println("====== ��ü �� ��� ======");
						print(name, id, dept, ph);
						break;
						
					case 3:
						System.out.println("[���� ��ȸ �մϴ�.]");
						System.out.print("�����ȣ�� �Է��ϼ���. : ");
						search(g_sc.nextInt(), name, id, dept, ph);
						break;
						
					case 4:
						System.out.println("[�� ������ �����մϴ�.]");
						System.out.print("�����ȣ��  �Է��ϼ���. : ");
						modify(g_sc, g_sc.nextInt(), name, id, dept, ph);
						break;

					default:
						
						 System.out.println("*** ȣ�� ��������ý��� ***");
						return;
					}
				}
			}
		}
}
