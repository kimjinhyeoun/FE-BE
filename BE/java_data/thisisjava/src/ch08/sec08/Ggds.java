package ch08.sec08;

public class Ggds {

	public static void main(String[] args) {
		for(int a = 2; a < 10; a++) {
			System.out.println("-"+a+"단-");
			for(int b = 1; b < 10; b++) 
				System.out.printf("%2d x %2d = %2d \n", a,b,a*b);
		}
	}

}
