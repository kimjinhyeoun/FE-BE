package ch12.sec04;

public class InExample2 {

	public static void main(String[] args) throws Exception {
		int speed = 0;
		int keyCode = 0;
		//키보드 번호표를 이용해 속도를 오르락 내리락
		while(true) {
			if(keyCode != 13 && keyCode != 10) {
				if(keyCode == 105) {
					speed++;
				}else if(keyCode == 107) {
					speed--;
				}else if(keyCode == 51) {
					break;
				}
				System.out.println("-------------");
				System.out.println("1. 증속 | 2. 감속 | 3. 중지");
				System.out.println("-------------");
				System.out.println("현재 속도 : " + speed);
				System.out.println("선택 : ");
			}
			
			//키를 하나씩 읽음
			keyCode = System.in.read();
		}
		
		System.out.println("프로그램 종료");
	}

}
