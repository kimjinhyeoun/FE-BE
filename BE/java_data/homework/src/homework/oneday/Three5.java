package homework.oneday;

public class Three5 {

	public static void main(String[] args) {
		int a = 5;
		int b = 4;
		
		if(a < b) {
			System.out.println(a);
		}else {
			System.out.println(b);
		}
		 
		int c = (a < b) ? a : b; 
		System.out.println(c);
	}
}
