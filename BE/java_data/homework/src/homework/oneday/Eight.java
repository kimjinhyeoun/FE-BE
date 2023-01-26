package homework.oneday;

import java.util.Arrays;
import java.util.Scanner;

public class Eight {
	public static void main(String[] args) {
		int result = 0;
		int c = 0;
		String mo;
		Scanner scanner = new Scanner(System.in);
		System.out.print("더할 갯수: ");
		int n = scanner.nextInt();
		int arr[] = new int[n];
		System.out.print("최대 금액: ");
		int mm = scanner.nextInt();
		
		for(int a = 0; a < n; a++) {
			System.out.print("값을 입력해주세요: ");
			int m = scanner.nextInt();
			arr[a] = m;
			result += m;
			c = a+1;
			if(result > mm) {
				break;
			}
		}
		double avg = (double)result/c;
		System.out.print("1) 입력한 금액: ");
		for(int b = 0; b < c; b++) {
			System.out.print(arr[b]+" ");
		}
		Arrays.sort(arr);
		System.out.println("\n2) 최대 금액: " + arr[n-1]);
		System.out.println("3) 최소 금액: " + arr[n-c]);
		System.out.println("4) 충합계 금액: " + result);
		System.out.printf("5) 평균: %.2f", avg);
	}
}
