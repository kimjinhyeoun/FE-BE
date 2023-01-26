package homework.oneday;

import java.util.Scanner;

public class Six2 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int[] arr = {10000,5000,1000,500,100,50,10};
		
		System.out.print("금액 : ");
		int price = scan.nextInt();
		
		for(int i = 0; i < arr.length; i++) {
			if(price/arr[i] > 0) {
				System.out.println(arr[i] + "원 : " + price/arr[i] + " 개");
				price%=arr[i];
			}
		}
	}
}
