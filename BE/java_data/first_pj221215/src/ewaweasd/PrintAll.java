package ewaweasd;

public class PrintAll extends HotelOpen{
	public void printAll() { //객실현황
	    for(int i=0; i<room.length; i++) {
	      if(room[i] == true) {
	        System.out.println("  " + (i+1) + "번째 ■ 호텔 객실 사용중입니다.");
	      }else {
	        System.out.println("  " + (i+1) + "번째 □ 호텔 객실 비어있습니다.");
	      }
	    }
	  }
}
