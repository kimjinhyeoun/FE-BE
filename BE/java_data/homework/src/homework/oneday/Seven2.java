package homework.oneday;

public class Seven2 {

	public static void main(String[] args) {
		for (int i = 1; i < 5; i++) {
			for (int j = 5; j > i; j--) {
				System.out.print(" ");
			}
			for (int j = 1; j <= i * 2 - 1; j++) {
				System.out.print("*");
			}
			System.out.println("\n");
		}
	}

}
