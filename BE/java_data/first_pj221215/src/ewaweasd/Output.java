package ewaweasd;

public class Output extends HotelOpen{
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
}
