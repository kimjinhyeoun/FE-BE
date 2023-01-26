package homework.oneday;

import java.util.Arrays;

public class Eight2 {
	public static void main(String[] args) {
		int[] a = { 74, 40, 10, 38, 88, 55, 23, 99, 12, 61 };
		System.out.printf("선택 정렬 전: ");
		for(int k:a) {
			System.out.printf(k + " ");
		}
		int tempValue, tempJ = 0;
		for (int i = 0; i < a.length; i++) {  // 배열 처음부터 끝까지 반복 (i는 현재 위치)
			int min = Integer.MAX_VALUE;  // 제일 작은 수를 찾기 위해, min은 int의 최대 값으로 임시 세팅
			for (int j = i; j < a.length; j++) {
				if (a[j] < min) {  // 현재 위치부터 배열 마지막까지 반복문 돌면서 최소 값을 계속 찾음
					min = a[j];
					tempJ = j;
				}
			}
			tempValue = a[i]; // 찾은 최소값과 현재 위치의 값과 서로 바꿈
			a[i] = a[tempJ];
			a[tempJ] = tempValue;
		}
		System.out.println("");
		System.out.println("셀렉트 :"+Arrays.toString(a));
				
		for (int i = 0; i < a.length; i++) {
			for (int z = 0; z < a.length - z - 1; z++) { // 0 ~ n, 0 ~ n-1 번 반복를 돌면서 바로 옆 숫자릴 비교
				if (a[z] > a[z + 1]) {  // 바로 오른쪽 숫자와 비교하여 크기가 클 경우, 서로 위치를 바꿈
					tempValue = a[z];
					a[z] = a[z + 1];
					a[z + 1] = tempValue;
				}
			}
		}
		System.out.println("버블 :"+Arrays.toString(a));
	}
}
