package ch06.sec10;

public class Calculator {
	
	static double pi = 3.14159;
	//정적
	static int plus(int x, int y) {
		return x + y; //int 가질 때는 return 필요 return result; 아니어도 됨 계산해서 집어넣어도된
	}
	
	static int minus(int x, int y) {
		return x - y;
	}

}
