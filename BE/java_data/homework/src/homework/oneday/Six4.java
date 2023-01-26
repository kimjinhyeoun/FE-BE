package homework.oneday;

public class Six4 {

	public static void main(String[] args) {
		int arr[][][] = new int [3][3][3];
		int num = 1;
		
		for(int i = 0; i < arr.length; i++) {
			for(int j = 0; j < arr[i].length; j++) {
				for(int k = 0; k < arr[i][j].length; k++) {
					System.out.print(num+" ");
					num++;
				}
				System.out.println();
			}
			System.out.println();
		}
	}

}
