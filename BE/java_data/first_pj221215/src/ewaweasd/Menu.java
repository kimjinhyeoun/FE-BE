package ewaweasd;

public class Menu extends HotelOpen{
	public int menu() { //�޴�
	    System.out.print("\n1.�Խǿ���  2.���  3.������Ȳ 4.����ȸ  9.���� : ");
	    int sel = Integer.parseInt(sc.nextLine());
	    return sel;
	  }
}
