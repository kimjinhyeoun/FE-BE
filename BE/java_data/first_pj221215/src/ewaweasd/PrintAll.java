package ewaweasd;

public class PrintAll extends HotelOpen{
	public void printAll() { //������Ȳ
	    for(int i=0; i<room.length; i++) {
	      if(room[i] == true) {
	        System.out.println("  " + (i+1) + "��° �� ȣ�� ���� ������Դϴ�.");
	      }else {
	        System.out.println("  " + (i+1) + "��° �� ȣ�� ���� ����ֽ��ϴ�.");
	      }
	    }
	  }
}
