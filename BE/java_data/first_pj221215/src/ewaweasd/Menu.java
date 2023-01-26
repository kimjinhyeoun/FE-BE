package ewaweasd;

public class Menu extends HotelOpen{
	public int menu() { //메뉴
	    System.out.print("\n1.입실예약  2.퇴실  3.객실현황 4.고객조회  9.종료 : ");
	    int sel = Integer.parseInt(sc.nextLine());
	    return sel;
	  }
}
