package ch03.sectest;

public class OddEvent5 {

	public static void main(String[] args) {
		
		System.out.print("5의 배수 :");
		for(int i=0; i<=100; i+=5) {
			if(i == 0) {
				continue;
			}
			System.out.print(" "+i);
		}

	}

}
