package hmm;

import java.util.Scanner;

public class HotelOpen {
	
	 Scanner sc = new Scanner(System.in); //����
	  boolean[] room = new boolean[5]; //5�� ��
	  int num = 0; //��������

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HotelOpen guest = new HotelOpen();

	    System.out.println("*** ȣ�� ��������ý��� ***");
	    int sel = 9; //����
	    guest.printAll(); //��ü����

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

	          default : 
	            System.out.println("1 ~ 3 ������ �޴��� �Է��ϼ���.");break;
	        }
	      }catch (Exception e) {}

	    }
	  }

	  public int menu() { //�޴�
	    System.out.print("\n1.�Խǿ���  2.���  3.������Ȳ  9.���� : ");
	    int sel = Integer.parseInt(sc.nextLine());
	    return sel;
	  }

	  public void input() { //����
	    System.out.print("ȣ�� �����ȣ �Է� >> ");
	    num = Integer.parseInt(sc.nextLine());
	    if(num < 1 || num > 5) {
	      System.out.println(num + "��ȣ�� ����� �� �����ϴ�.");
	    }else if(room[num-1] == true){
	    	System.out.println("room [" + num + "] ����Ǿ��ִ� �����Դϴ�.");
	    }else{
	    	System.out.println("room[" + num + "] ���� ���� ����");
		    room[num-1] = true;
	    }
	  }

	  public void output() { //���
	    System.out.print("��� �� ��ȣ �Է� >>");
	    num = Integer.parseInt(sc.nextLine());
	    if(room[num-1] == true) {
	      System.out.println("room [" + num + "] ���� ��� �Ͽ����ϴ�.");
	      room[num-1]=false; 
	    }else {
	      System.out.println("room [" + num + "] ����ִ� �����Դϴ�.");
	    }
	  }

	  public void printAll() { //������Ȳ
	    for(int i=0; i<room.length; i++) {
	      if(room[i] == true) {
	        System.out.println("  " + (i+1) + "��° �� ȣ�� ���� ������Դϴ�.");
	      }else {
	        System.out.println("  " + (i+1) + "��° �� ȣ�� ���� ����ֽ��ϴ�.");
	      }
	    }
	  }

	  public static void myExit() {
	    System.out.println("\nȣ�� ���� ���α׷��� �����մϴ�.");
	    System.exit(1);
	}

}
