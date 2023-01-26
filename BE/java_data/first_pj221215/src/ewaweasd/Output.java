package ewaweasd;

public class Output extends HotelOpen{
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
}
